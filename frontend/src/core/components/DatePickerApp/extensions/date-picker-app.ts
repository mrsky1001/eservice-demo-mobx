import { formatDateToPicker, toDateBackend, toDatePicker } from '../../../lib/date'

export interface IDatePickerProps {
    id?: string
    type?: string
    label?: string
    locale?: string
    classes?: string
    minDate?: string
    maxDate?: string
    selected?: string
    dateFormat?: string
    classesGroup?: string
    classesLabel?: string
    placeholderText?: string
    classesDatepicker?: string
    classesDivDatepicker?: string

    onChange: (val: string) => void
    dateInFormat?: (val: string) => Date
    dateOutFormat?: (val: string) => string

    required?: boolean
    disabled?: boolean
    isLeftLabel?: boolean
    formatWeekDay?: boolean
    useWeekdaysShort?: boolean
}

export const init = (props: IDatePickerProps): IDatePickerProps => {
    let classes = props.classes ? props.classes : ''
    let classesLabel = props.classesLabel ? props.classesLabel : ''
    let classesGroup = props.classesGroup ? props.classesGroup : ''
    let classesDivDatepicker = props.classesDivDatepicker ? props.classesDivDatepicker : ''
    let classesDatepicker = props.classesDatepicker ? props.classesDatepicker : ''

    classes += ' datepicker-custom'
    classesLabel += ' datepicker-label'
    classesGroup += ' datepicker-group'
    classesDivDatepicker += ' datepicker-div'
    classesDatepicker += ' datepicker-input form-control'

    if (props.isLeftLabel) {
        classes += ' left-div'
        classesDivDatepicker += ' col-sm-10 left-datepicker-div'
        classesLabel += ' col-sm-2 left-label'
        classesGroup += ' form-group row left-group'
    }

    const handlerChange = (val) => {
        props.onChange(props.dateOutFormat ? props.dateOutFormat(val) : toDateBackend(val))
    }

    const emptyState = {
        id: '',
        placeholderText: props.label,
        type: 'date',
        locale: 'ru',
        dateFormat: formatDateToPicker,
        dateOutFormat: toDateBackend,
        dateInFormat: toDatePicker,

        required: false,
        isLeftLabel: false,
        disabled: false,
    }

    return Object.assign(emptyState, props, {
        onChange: handlerChange,
        classes: classes,
        classesDatepicker: classesDatepicker,
        classesDivDatepicker: classesDivDatepicker,
        classesLabel: classesLabel,
        classesGroup: classesGroup,
    })
}
