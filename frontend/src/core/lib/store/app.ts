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
