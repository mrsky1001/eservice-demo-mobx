import { makeAutoObservable } from 'mobx'

interface ISimpleFormStore {
    selectedGroup:
    info: string
}

class SimpleFormStore implements ISimpleFormStore {
    userName = ''
    info = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeUserName(val: string) {
        this.userName = val
    }

    changeInfo(val: string) {
        this.info = val
    }

    handlerSubmit() {
        this.info = this.userName
    }
}

export default new SimpleFormStore()
