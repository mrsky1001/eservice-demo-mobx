import './FormControlApp.scss'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { IFormControlAppProps, init } from './extensions/form-control-app'

const FormControlApp = (props: IFormControlAppProps): JSX.Element => {
    const initState = init(props)
    const [currentValue, setValue] = useState(initState.value)

    const onBlur = () => {
        if (currentValue !== initState.value) {
            initState.onChange(currentValue)
        }
    }

    return (
        <div>
            {initState.label === undefined ? null : (
                <Form.Label className={initState.classesLabel}>{initState.label}</Form.Label>
            )}
            <Form.Control
                id={initState.id}
                as={initState.as}
                type={initState.type}
                required={initState.required}
                placeholder={initState.placeholder}
                onChange={(res) => setValue(res.target.value)}
                onBlur={() => onBlur()}
                classes={initState.classes}
                value={currentValue}
            />
        </div>
    )
}
export default FormControlApp
