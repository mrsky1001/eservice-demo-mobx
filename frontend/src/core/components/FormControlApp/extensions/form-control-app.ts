/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { CSSProperties, ElementType } from 'react'
import { appendStr, listToOptions } from '../../../lib/common'
import { OptionSelect } from '../../../lib/models/option-select'

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
    emptyMessage?: string
    classesInput?: string
    validErrors?: string[]
    value: any
    selectProps?: {
        options: any[]
        keyField?: string
        valueField: string
        idField?: string
        textField?: string
        icon?: string
        isMulti?: boolean
        isClearable?: boolean
        closeMenuOnSelect?: boolean
    }
    classes?: string
    isValid?: boolean
    disabled?: boolean
    required?: boolean
    onChange?: (val: any) => void
}

export const init = (props: IFormControlAppProps): IFormControlAppProps => {
    let options = []
    let value = props.value

    if (props.as === 'select') {
        props.selectProps.idField = props.selectProps.idField ? props.selectProps.idField : 'id'
        props.selectProps.keyField = props.selectProps.keyField ? props.selectProps.keyField : 'id'
        props.selectProps.textField = props.selectProps.textField
            ? props.selectProps.textField
            : props.selectProps.valueField

        const filtered = props.selectProps.options.filter((o) => !o.isColumnsExpander)

        options = listToOptions(
            filtered,
            props.selectProps.valueField,
            props.selectProps.textField,
            props.selectProps.icon,
            props.selectProps.idField,
        )

        if (props.selectProps.isMulti) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            const filtered = props.value.filter((o) => !o.isColumnsExpander)

            value = listToOptions(
                filtered,
                props.selectProps.valueField,
                props.selectProps.textField,
                props.selectProps.icon,
                props.selectProps.idField,
            )
        } else {
            value = options.find((o) => o.value === value)
        }
    }

    const emptyState = {
        as: 'input',
        type: 'text',
        options: options,
        emptyMessage: 'Нет данных',
        placeholder: props.as === 'select' ? 'Выбрать...' : '',
        onChange: () => {
            return ''
        },
    }

    return Object.assign(emptyState, props, {
        value,
        classes: appendStr(props.classes, ' form-control-app'),
    })
}
