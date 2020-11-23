import moment from "moment"

export const formatDateToPicker = "dd.MM.yyyy"
const formatDateToBackend = "DD.MM.YYYY"
const formatDatePicker = "DD-MM-YY"

export const toDateBackend = value => {
    return moment(value).format(formatDateToBackend)
}

export const toDatePicker = value => {
    return moment(value, formatDatePicker).toDate()
}

export default { toDatePicker, toDateBackend, formatDateToPicker }
