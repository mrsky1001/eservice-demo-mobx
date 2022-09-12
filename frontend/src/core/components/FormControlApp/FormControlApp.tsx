/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './FormControlApp.scss'
import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import {IFormControlAppProps, init} from './extensions/form-control-app'
import validateForm from './extensions/validation-control-app'
import DatePickerApp from '../DatePickerApp/DatePickerApp'
import Select, {components} from 'react-select'

import RangeSlider from 'react-bootstrap-range-slider';

const {Option} = components

const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)
    const [validErrors, setValidErrors] = useState([])
    const [isInvalid, setIsInvalid] = useState(undefined)

    const onChange = (val) => {
        let value = val && val.currentTarget ? val.currentTarget.value : val

        if (initState.type === 'number') {
            value = Number(value)
        }

        const propsValidate = {
            value: value,
            type: initState.type,
            minLength: initState.minLength,
            maxLength: initState.maxLength,
            minValue: initState.minValue,
            maxValue: initState.maxValue,
            pattern: initState.pattern,
            required: initState.required,
            patternError: initState.patternError,
            isHardMinMaxValue: initState.isHardMinMaxValue,
        }

        const errors = validateForm(propsValidate)

        if (props.as !== 'select') {
            setValidErrors(errors)
            initState.onChangeErrors(errors)
            setIsInvalid(errors.length > 0 ? false : undefined)
        }

        initState.onChange(propsValidate.value)
    }

    const IconOption = (props: typeof components): JSX.Element => {
        const getIcon = () => {
            if (initState.selectProps.iconField)
                if (props.data[initState.selectProps.iconField].length > 0)
                    return (
                        <>
                            <i className={props.data[initState.selectProps.iconField]}/> &nbsp;
                        </>
                    )
                else return <>&nbsp; &nbsp; &nbsp;</>
            return null
        }

        return (
            <Option {...props}>
                {getIcon()}
                {props.data.label}
            </Option>
        )
    }

    return (
        <div className={initState.classes}>
            {initState.label ? (
                <Form.Label className={initState.classesLabel}>
                    {initState.label}
                    {initState.required ? <span title={'Обязательное поле'} style={{color: 'darkred'}}>*</span> : null}
                </Form.Label>
            ) : null}
            {initState.type === 'date' ? (
                <DatePickerApp
                    id={initState.id}
                    type={initState.type}
                    style={initState.style}
                    required={initState.required}
                    onChange={onChange}
                    useWeekdaysShort={initState.useWeekdaysShort}
                    dateFormat={initState.dateFormat}
                    classes={initState.classesInput}
                    selected={String(initState.value)}
                    minDate={String(initState.minValue)}
                    maxDate={String(initState.maxValue)}
                    disabled={initState.disabled}
                    isInvalid={isInvalid}
                />
            ) : initState.as === 'select' ? (
                <Select
                    id={initState.id}
                    key={initState.id}
                    onChange={onChange}
                    type={initState.type}
                    // isInvalid={isInvalid}
                    value={initState.value}
                    style={initState.style}
                    required={initState.required}
                    isDisabled={initState.disabled}
                    defaultValue={initState.value}
                    isLoading={initState.selectProps.isLoading}
                    autoFocus={initState.autoFocus}
                    components={{Option: IconOption}}
                    className={initState.classesInput}
                    placeholder={initState.placeholder}
                    options={initState.selectProps.options}
                    isMulti={initState.selectProps.isMulti}
                    isClearable={initState.selectProps.isClearable}
                    noOptionsMessage={() => initState.emptyMessage}
                    // isValid={isInvalid === undefined ? isInvalid : !isInvalid}
                    closeMenuOnSelect={initState.selectProps.closeMenuOnSelect}
                />
            ) : initState.type === 'range' ? (<>
                    <RangeSlider
                        id={initState.id}
                        style={initState.style}
                        value={initState.value}
                        size={initState.rangeProps.size}
                        min={initState.rangeProps.min}
                        max={initState.rangeProps.max}
                        step={initState.rangeProps.step}
                        variant={initState.rangeProps.variant}
                        inputProps={initState.rangeProps.inputProps}
                        tooltip={initState.rangeProps.tooltip}
                        tooltipPlacement={initState.rangeProps.tooltipPlacement}
                        tooltipLabel={initState.rangeProps.tooltipLabel}
                        tooltipStyle={initState.rangeProps.tooltipStyle}
                        tooltipProps={initState.rangeProps.tooltipProps}
                        bsPrefix={initState.rangeProps.bsPrefix}
                        onChange={onChange}
                        onAfterChange={initState.onAfterChange}
                        className={initState.classes}
                        disabled={initState.disabled}
                    />
                    <div className={'range-group-labels'}>
                        {initState.rangeProps.options.map(a => {
                                const isActive = Number(initState.value) === Number(a[initState.rangeProps.valueField])
                                const classActiveColor = initState.rangeProps.isActiveColor && isActive ? 'active-range' : ''

                                return (
                                    <div key={a.id}
                                         className={'range-label ' + classActiveColor}>
                                        {a[initState.rangeProps.textField]}
                                    </div>
                                )
                            }
                        )}
                    </div>
                </>
            ) : (
                <Form.Control
                    id={initState.id}
                    as={initState.as}
                    key={initState.id}
                    type={initState.type}
                    autoFocus={initState.autoFocus}
                    style={initState.style}
                    rows={initState.rows}
                    required={initState.required}
                    placeholder={initState.placeholder}
                    onChange={onChange}
                    onBlur={onChange}
                    min={initState.minValue}
                    max={initState.maxValue}
                    classes={initState.classesInput}
                    value={initState.value}
                    disabled={initState.disabled}
                    isInvalid={isInvalid}
                    // isValid={isInvalid === undefined ? isInvalid : !isInvalid}
                />
            )}

            {/* <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>*/}
            <Form.Text className={'form-errors'}>
                {validErrors.map((error, idx) => (
                    <div key={idx} className={'text-danger'}>
                        {error}
                    </div>
                ))}
            </Form.Text>
        </div>
    )
}
export default FormControlApp
