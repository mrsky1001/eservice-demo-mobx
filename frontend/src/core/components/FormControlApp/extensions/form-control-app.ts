/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React, { CSSProperties, ElementType } from 'react'
import { appendStr, listToOptions } from '../../../lib/common'

export interface ISelectProps {
    options: any[]
    keyField?: string
    valueField?: string
    idField?: string
    textField?: string
    isLoading?: boolean
    iconField?: string
    isMulti?: boolean
    isClearable?: boolean
    closeMenuOnSelect?: boolean
}

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
    dateFormat?: string
    useWeekdaysShort?: boolean
    isHardMinMaxValue?: boolean
    value: any
    regex?:string

    selectProps?: ISelectProps,
    rangeProps?: {
        options: any[]
        keyField?: string
        valueField?: string
        textField?: string
        size?: "sm" | "lg"
        min?: number
        max?: number
        step?: number
        variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light"
        inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>
        tooltip?: "auto" | "on" | "off"
        isActiveColor?: boolean
        tooltipPlacement?: "top" | "bottom"
        tooltipLabel?: (value: number) => string
        tooltipStyle?: React.CSSProperties
        tooltipProps?: Partial<React.HTMLAttributes<HTMLDivElement>>
        bsPrefix?: string
    }
    classes?: string
    isValid?: boolean
    disabled?: boolean
    required?: boolean
    onChangeErrors?: (val: string[]) => void
    onChange?: (val: any) => void
    onAfterChange?: (val: any) => void
}

export const init = (props: IFormControlAppProps): IFormControlAppProps => {
    let options = []
    let value = props.value

    if (props.as === 'select') {
        props.selectProps.idField = props.selectProps.idField ? props.selectProps.idField : 'id'
        props.selectProps.keyField = props.selectProps.keyField ? props.selectProps.keyField : 'id'
        props.selectProps.valueField = props.selectProps.valueField ? props.selectProps.valueField :  props.selectProps.idField
        props.selectProps.textField = props.selectProps.textField
            ? props.selectProps.textField
            : props.selectProps.valueField

        const filtered = props.selectProps.options.filter((o) => !o.isColumnsExpander)

        options = listToOptions(
            filtered,
            props.selectProps.valueField,
            props.selectProps.textField,
            props.selectProps.iconField,
            props.selectProps.idField,
        )

        if (props.selectProps.isMulti) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            const filtered = props.value.filter((o) => !o.isColumnsExpander)

            value = listToOptions(
                filtered,
                props.selectProps.valueField,
                props.selectProps.textField,
                props.selectProps.iconField,
                props.selectProps.idField,
            )
        } else {
            if (value && typeof value === 'object') {
                value = options.find((o) => o.value === value[props.selectProps.valueField])
            } else {
                value = options.find((o) => o.value === value)
            }
        }
    }

    if (props.type === 'number' && props.minValue && props.maxValue) {
        value = Number(value)
        props.minValue = Number(props.minValue)
        props.maxValue = Number(props.maxValue)
    }



    const selectedProps = props.selectProps ? Object.assign(props.selectProps, { options }) : undefined

    const emptyState = {
        as: 'input',
        type: 'text',
        emptyMessage: 'Нет данных',
        placeholder: props.as === 'select' ? 'Выбрать...' : '',
        onChange: () => {
            return ''
        },  onChangeErrors: () => {
            return ''
        },
    }

    return Object.assign(emptyState, props, {
        value,
        selectProps: selectedProps,
        classes: appendStr(props.classes, ' form-control-app'),
    })
}
