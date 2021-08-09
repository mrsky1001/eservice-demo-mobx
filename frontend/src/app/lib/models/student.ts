import { Global, IGlobal } from '../../../core/lib/models/global'
interface IStudent extends IGlobal {
    login: string
    email: string
    age: number
    date: string
}

export default class Student extends Global implements IStudent {
    login: string
    email: string
    age: number
    date: string

    constructor(obj: IStudent) {
        super(obj)
    }
}
