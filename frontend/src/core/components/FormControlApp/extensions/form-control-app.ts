/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { CSSProperties, ElementType } from 'react'
import { appendStr } from '../../../lib/common'

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
    autoFocus?: boolean
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
        classes: appendStr(props.classes, ' form-control-app'),
    })
}
