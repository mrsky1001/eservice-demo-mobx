import { makeAutoObservable } from 'mobx'

class AppStore {
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    changeLoading(val: boolean) {
        this.loading = val
    }
}

export default new AppStore()
