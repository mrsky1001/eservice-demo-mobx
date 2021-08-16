import './FormControlApp.scss'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { IFormControlAppProps, init } from './extensions/form-control-app'

const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)

    return (
        <div className={initState.classes}>
            {initState.label === undefined ? null : (
                <Form.Label className={initState.classesLabel}>{initState.label}</Form.Label>
            )}
            <Form.Control
                id={initState.id}
                as={initState.as}
                type={initState.type}
                required={initState.required}
                placeholder={initState.placeholder}
                onChange={(res) => initState.onChange(res.target.value)}
                onBlur={(val) => initState.onChange(val.currentTarget.value)}
                classes={initState.classesInput}
                value={initState.value}
                disabled={props.isDisabled}
            />
        </div>
    )
}
export default FormControlApp
