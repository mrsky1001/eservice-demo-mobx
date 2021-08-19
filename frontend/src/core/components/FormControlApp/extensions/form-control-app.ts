import { CSSProperties, ElementType } from 'react'
import validateForm from './validation-control-app'

export interface IFormControlAppProps {
    value: string | number
    id?: string
    type?: string
    maxLength?: number
    minLength?: number
    maxValue?: number
    minValue?: number
    as?: ElementType
    pattern?: string
    patternError?: string
    label?: string
    rows?: number
    placeholder?: string
    classes?: string
    classesLabel?: string
    classesInput?: string
    style?: CSSProperties
    disabled?: boolean
    required?: boolean
    onChange?: (val: string | number) => void
    isValid?: boolean
    validErrors?: string[]
}

export const init = (props: IFormControlAppProps): IFormControlAppProps => {
    // const errors = validateForm({
    //     value: props.value,
    //     type: props.type,
    //     minLength: props.minLength,
    //     maxLength: props.maxLength,
    //     minValue: props.minValue,
    //     maxValue: props.maxValue,
    //     pattern: props.pattern,
    //     patternError: props.patternError,
    // })

    const emptyState = {
        as: 'input',
        type: 'text',
        // validErrors: errors,
        // isValid: errors.length > 0,
        onChange: () => {
            return ''
        },
    }

    return Object.assign(emptyState, props, {
        classes: 'form-control-app ' + props.classes,
    })
}
