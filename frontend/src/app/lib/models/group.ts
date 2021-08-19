import { Global, IGlobal } from '../../../core/lib/models/global'
import Student, { IStudent } from './student'

export interface IGroup extends IGlobal {
    name: string
    students: IStudent[]
}

export default class Group extends Global<IGroup, Group> implements IGroup {
    name: string
    students: Student[]

    constructor(obj: IGroup) {
        super(obj)
        this.students = obj.students.map((s) => new Student(s))
    }

    getStudentsText(): string {
        return this.students.map((s) => JSON.stringify(s, null, ' ')).join(' \n')
    }
}
