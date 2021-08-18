import { makeAutoObservable } from 'mobx'
import Group, { IGroup } from '../../models/group'
import { IOptionSelect } from '../../../../core/lib/models/option-select'

interface ISelectFormStore {
    loading: boolean
    selectedGroup: Group
    groups: Group[]
}

class SelectFormStore implements ISelectFormStore {
    loading = true
    selectedGroup: Group = null
    groups: Group[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeLoading(val: boolean) {
        this.loading = val
    }

    changeGroups(val: Group[]) {
        this.groups = val
    }

    selectGroup(val: IOptionSelect) {
        this.selectedGroup = this.groups.find((g) => g.name === val.value)
    }

    init(rawGroups: IGroup[]) {
        this.changeGroups(rawGroups.map((g) => new Group(g)))
        this.selectedGroup = this.groups[0]
        this.changeLoading(false)
    }
}

export default new SelectFormStore()
