/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { Global, IGlobal } from '../../../core/lib/models/global'

export interface IStudent extends IGlobal {
    login: string
    email: string
    age: string
    date: string
}

export default class Student extends Global<IStudent, Student> implements IStudent {
    login: string
    email: string
    age: string
    date: string

    constructor(obj: IStudent) {
        super(obj)
    }
}
