/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { IOptionSelect } from '../../../lib/models/option-select'

export interface IFormSelectAppProps {
    id?: string
    value: IOptionSelect
    options: IOptionSelect[]
    label?: string
    placeholder?: string
    classes?: string
    classesSelect?: string
    classesLabel?: string
    classesGroup?: string
    defaultOptions?: string
    isCanEmpty?: boolean
    isLeftLabel?: boolean
    disabled?: boolean
    required?: boolean
    onChange: (val: IOptionSelect) => void
}

export const init = (props: IFormSelectAppProps): IFormSelectAppProps => {
    let classes = props.classes ? props.classes : ''
    let classesSelect = props.classes ? props.classes : ''
    let classesLabel = props.classes ? props.classes : ''
    let classesGroup = props.classes ? props.classes : ''

    classes += ' select-app'
    classesSelect += ' select-input'
    classesLabel += ' select-label'
    classesGroup += ' select-control-group'

    if (props.isLeftLabel) {
        classes += ' left-div'
        classesSelect += ' col-sm-10 left-select'
        classesLabel += ' col-sm-2 left-label'
        classesGroup += ' form-group row left-group'
    }

    const emptyState = {
        label: 'Выберите',
        defaultOptions: true,
        isCanEmpty: true,
        isLeftLabel: false,
        disabled: false,
        required: false,
    }

    return Object.assign(emptyState, props, {
        classes: classes,
        classesSelect: classesSelect,
        classesLabel: classesLabel,
        classesGroup: classesGroup,
    })
}
