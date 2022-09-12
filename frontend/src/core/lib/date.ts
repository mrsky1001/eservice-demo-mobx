/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import moment from 'moment'

export const formatDateToPicker = 'dd.MM.yyyy'
const formatDateToBackend = 'DD.MM.YYYY'
const formatDatePicker = 'DD-MM-YYYY'

export const toDateBackend = (value: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return value ? moment(value).format(formatDateToBackend) : ''
}

export const toDatePicker = (value: string): Date => {
    return value ? moment(value, formatDatePicker).toDate() : null
}

export default {toDatePicker, toDateBackend, formatDateToPicker}
