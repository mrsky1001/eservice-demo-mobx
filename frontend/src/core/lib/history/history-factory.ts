/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import history from './create-hash-history'

export const clearLocation = (): void => {
    location.pathname = ''
    location.hash = ''
}

export const pushUrl = (url: string): void => {
    clearLocation()
    location.href = ''
    location.pathname = ''
    location.hash = url
    history.go(-1)
}

export const backUrl = (): void => {
    clearLocation()
    history.go(-1)
    history.go(-1)
}
