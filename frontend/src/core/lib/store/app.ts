/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { makeAutoObservable } from 'mobx'

class AppStore {
    loading = false
    countEvent = 0

    constructor() {
        makeAutoObservable(this)
    }

    setLoading(val: boolean) {
        this.countEvent += val ? 1 : -1
        this.loading = this.countEvent > 0
    }
}

export default new AppStore()
