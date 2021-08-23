/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { makeAutoObservable } from 'mobx'
import Student from '../../models/student'
import rawUsers from '../../../../../test-data/users'

interface ITableStore {
    users: Student[]
}

class TableStore implements ITableStore {
    users: Student[] = rawUsers.map((u) => new Student(u))

    constructor() {
        makeAutoObservable(this)
    }
}

export default new TableStore()
