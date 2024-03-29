/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { makeAutoObservable } from 'mobx'
import Student from '../../models/student'
import rawUsers from '../../../../../test-data/users'

interface IEditTableStore {
    users: Student[]
}

class EditTableStore implements IEditTableStore {
    users: Student[] = rawUsers.map((u) => new Student(u))

    constructor() {
        makeAutoObservable(this)
    }

    changeUserLogin(userId, val) {
        this.users.find((u) => u.id === userId).login = val
        this.users = [...this.users]
    }
}

export default new EditTableStore()
