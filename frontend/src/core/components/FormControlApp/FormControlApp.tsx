import './FormControlApp.scss'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { IFormControlAppProps, init } from './extensions/form-control-app'
import validateForm from './extensions/validation-control-app'
import DatePickerApp from '../DatePickerApp/DatePickerApp'

const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)
    const [validErrors, setValidErrors] = useState([])
    const [isInvalid, setIsInvalid] = useState(undefined)

    const onBlur = (val) => {
        const value = val.currentTarget ? val.currentTarget.value : val

        const errors = validateForm({
            value: value,
            type: initState.type,
            minLength: initState.minLength,
            maxLength: initState.maxLength,
            minValue: initState.minValue,
            maxValue: initState.maxValue,
            pattern: initState.pattern,
            patternError: initState.patternError,
        })

        setValidErrors(errors)
        setIsInvalid(errors.length > 0)
        initState.onChange(value)
    }

    return (
        <div className={initState.classes}>
            {initState.label ? (
                <Form.Label className={initState.classesLabel}>
                    {initState.label}
                    {initState.required ? <span style={{ color: 'darkred' }}>*</span> : null}
                </Form.Label>
            ) : null}
            {initState.type === 'date' ? (
                <DatePickerApp
                    id={initState.id}
                    type={initState.type}
                    style={initState.style}
                    required={initState.required}
                    onChange={onBlur}
                    classes={initState.classesInput}
                    selected={String(initState.value)}
                    disabled={props.disabled}
                    isInvalid={isInvalid}
                />
            ) : (
                <Form.Control
                    id={initState.id}
                    as={initState.as}
                    type={initState.type}
                    style={initState.style}
                    rows={initState.rows}
                    required={initState.required}
                    placeholder={initState.placeholder}
                    onChange={onBlur}
                    onBlur={onBlur}
                    classes={initState.classesInput}
                    value={initState.value}
                    disabled={props.disabled}
                    isInvalid={isInvalid}
                    isValid={isInvalid === undefined ? isInvalid : !isInvalid}
                />
            )}
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
