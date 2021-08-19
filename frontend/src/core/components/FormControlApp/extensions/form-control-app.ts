import { CSSProperties, ElementType } from 'react'

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
