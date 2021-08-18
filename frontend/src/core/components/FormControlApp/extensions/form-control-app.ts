import { CSSProperties, ElementType } from 'react'

export interface IFormControlAppProps {
    required?: boolean

    value: string | number | string[]
    id?: string
    type?: string
    as?: ElementType
    label?: string
    rows?: number
    placeholder?: string
    classes?: string
    classesLabel?: string
    classesInput?: string
    style?: CSSProperties
    isDisabled?: boolean
    onChange?: (val: string | number | string[]) => void
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
