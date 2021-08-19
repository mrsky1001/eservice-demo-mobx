import './FormControlApp.scss'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { IFormControlAppProps, init } from './extensions/form-control-app'
import validateForm from './extensions/validation-control-app'

const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)
    const [validErrors, setValidErrors] = useState([])
    const [isInvalid, setIsInvalid] = useState(undefined)

    const onBlur = (val) => {
        const value = val.currentTarget.value

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
            {initState.label === undefined ? null : (
                <Form.Label className={initState.classesLabel}>{initState.label}</Form.Label>
            )}
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
                validity={isInvalid === undefined ? isInvalid : !isInvalid}
                isValid={isInvalid === undefined ? isInvalid : !isInvalid}
            />
            <div className={'form-errors'}>
                {validErrors.map((error, idx) => (
                    <Form.Text key={idx} className={'text-danger'}>
                        {error}
                    </Form.Text>
                ))}
            </div>
        </div>
    )
}
export default FormControlApp
