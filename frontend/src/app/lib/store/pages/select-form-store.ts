import { makeAutoObservable } from 'mobx'
import Group from '../../models/group'

interface ISimpleFormStore {
    selectedGroup: Group
    groups: Group[]
}

class SimpleFormStore implements ISimpleFormStore {
    selectedGroup: Group = null
    groups: Group[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeGroups(val: Group[]) {
        this.groups = val
    }

    selectGroup(val: Group) {
        this.selectedGroup = val
    }
}

export default new SimpleFormStore()
