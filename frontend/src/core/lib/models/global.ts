import { nanoid } from 'nanoid'

export interface IGlobal {
    id?: string
}

export class Global implements IGlobal {
    id?: string

    private _init? = (obj): any => {
        const excludedList = ['id']

        Object.keys(obj).map((key) => {
            if (excludedList.indexOf(key) < 0)
                if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                    this[key] = obj[key]
                } else if (typeof this[key] === 'object' && typeof this[key].resetInit === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    this[key].resetInit(obj[key])
                }
        })

        return this
    }

    constructor(obj: IGlobal) {
        this.id = obj && obj.id ? obj.id : nanoid()
        obj && this._init(obj)
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    resetInit?(obj: any): any {
        return this._init(obj)
    }
}
