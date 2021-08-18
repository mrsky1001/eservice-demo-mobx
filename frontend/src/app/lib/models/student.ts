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
