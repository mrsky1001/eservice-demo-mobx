import { ElementType } from 'react'

export interface IFormControlAppProps {
    required?: boolean

    value: string | number | string[]
    id?: string
    type?: string
    as?: ElementType
    label?: string
    placeholder?: string
    classes?: string
    classesLabel?: string
    isDisabled?: boolean
    onChange: (val: string | number | string[]) => void
}

export const init = (props: IFormControlAppProps): IFormControlAppProps => {
    const emptyState = {
        as: 'input',
        type: 'text',
    }

    return Object.assign(emptyState, props)
}
