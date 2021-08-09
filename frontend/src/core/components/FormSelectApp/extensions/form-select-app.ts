interface IOption {
    label: string
    value: string
    icon: string
}

export interface IFormSelectAppProps {
    id?: string
    value: string
    options: IOption[]
    label?: string
    placeholder?: string
    classes?: string
    classesSelect?: string
    classesLabel?: string
    classesGroup?: string
    defaultOptions?: string
    isCanEmpty?: boolean
    isLeftLabel?: boolean
    isDisabled?: boolean
    required?: boolean
    onChange: (val: string | number | string[]) => void
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
        isDisabled: false,
        required: false,
    }

    return Object.assign(emptyState, props, {
        classes: classes,
        classesSelect: classesSelect,
        classesLabel: classesLabel,
        classesGroup: classesGroup,
    })
}
