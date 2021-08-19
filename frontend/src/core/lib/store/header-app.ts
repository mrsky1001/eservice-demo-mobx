import { makeAutoObservable, runInAction } from 'mobx'
import settingsService from '../../../app/settings-service'
import { isAuthorized } from '../api/common'

class HeaderAppStore {
    showModalLegend = false
    isAuthorized = false
    title: string = settingsService.title
    legend: Array<string> = []

    constructor() {
        makeAutoObservable(this)
    }

    async checkAuthorized() {
        const res = await isAuthorized()

        runInAction(() => {
            this.isAuthorized = res
        })
    }

    setLegend(val: string[]) {
        this.legend = val
    }

    setShowModalLegend(val: boolean) {
        this.showModalLegend = val
    }
}

export default new HeaderAppStore()
