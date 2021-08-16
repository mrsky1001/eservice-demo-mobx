import { makeAutoObservable } from 'mobx'
import Group from '../../models/group'

interface ISimpleFormStore {
    selectedGroup: Group
    info: string
}

class SimpleFormStore implements ISimpleFormStore {
    selectedGroup: Group
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
