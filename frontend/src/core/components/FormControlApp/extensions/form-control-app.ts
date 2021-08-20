import { CSSProperties, ElementType } from 'react'

export interface IFormControlAppProps {
    id?: string
    rows?: number
    type?: string
    label?: string
    as?: ElementType
    pattern?: string
    minValue?: number | string
    maxValue?: number | string
    minLength?: number
    maxLength?: number
    placeholder?: string
    style?: CSSProperties
    patternError?: string
    classesLabel?: string
    classesInput?: string
    validErrors?: string[]
    value: string | number

    classes?: string
    isValid?: boolean
    disabled?: boolean
    required?: boolean
    onChange?: (val: string | number) => void
}

export const init = (props: IFormControlAppProps): IFormControlAppProps => {
    const emptyState = {
        as: 'input',
        type: 'text',
        onChange: () => {
            return ''
        },
    }

    return Object.assign(emptyState, props, {
        classes: 'form-control-app ' + props.classes,
    })
}
