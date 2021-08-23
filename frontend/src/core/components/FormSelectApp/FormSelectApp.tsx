import './FormSelectApp.scss'
import React from 'react'
import { Form } from 'react-bootstrap'
import Select, { components } from 'react-select'
import { IFormSelectAppProps, init } from './extensions/form-select-app'
import { appendStr, checkAndInsert } from '../../lib/common'

const { Option } = components

const FormSelectApp = (props: IFormSelectAppProps): JSX.Element => {
    const initState = init(props)
    const handlerChange = (obj) => {
        initState.onChange(obj)
    }

    const isSelected = initState.value !== undefined && String(initState.value).length > 0
    const IconOption = (props: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const isContainIcon = props.options.find((o) => o.icon.length > 0) !== undefined
        const getIcon = () => {
            if (isContainIcon)
                if (props.data.icon.length > 0)
                    return (
                        <>
                            <i className={props.data.icon} /> &nbsp;
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

    const NoOptionsMessage = (props) => {
        return (
            <components.NoOptionsMessage {...props}>
                <span className="custom-css-class">Список пуст</span>
            </components.NoOptionsMessage>
        )
    }

    return (
        <div className={initState.classes}>
            <Form.Group controlId={initState.id} className={initState.classesGroup}>
                {initState.label === undefined ? null : (
                    <Form.Label className={initState.classesLabel}>
                        {initState.label}
                        {initState.required ? <span style={{ color: 'darkred' }}>*</span> : null}
                    </Form.Label>
                )}
                <Select
                    label={initState.label}
                    aria-label={initState.label}
                    options={initState.options}
                    defaultOptions={initState.defaultOptions}
                    required={initState.required}
                    placeholder={checkAndInsert(initState.required, initState.placeholder, ' (обязательное поле)')}
                    isClearable={initState.isCanEmpty}
                    onChange={handlerChange}
                    className={initState.classesSelect}
                    disabled={initState.disabled}
                    components={{ Option: IconOption, NoOptionsMessage: NoOptionsMessage }}
                    styles={{ noOptionsMessage: (base) => ({ ...base }) }}
                    value={initState.isCanEmpty && !isSelected ? undefined : initState.value}
                />
            </Form.Group>
        </div>
    )
}
export default FormSelectApp
