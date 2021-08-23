/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { makeAutoObservable } from 'mobx'

class AppStore {
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    setLoading(val: boolean) {
        this.loading = val
    }
}

export default new AppStore()
