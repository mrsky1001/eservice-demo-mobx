/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { nanoid } from 'nanoid'

export interface IInit {
    id?: string
}

export class Init<I, T> implements IInit {
    id?: string

    private _init? = (obj: IInit, isCheckReset = true): this => {
        const excludedList = ['id']

        Object.keys(obj).map((key: string) => {
            if (excludedList.indexOf(key) < 0)
                if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                    this[key] = obj[key]
                } else if (isCheckReset && typeof this[key] === 'object' && typeof this[key].resetInit === 'function') {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    this[key] = this[key].resetInit<I, T>(obj[key])
                }
        })

        return this
    }

    constructor(obj: IInit) {
        this.id = obj && obj.id ? obj.id : nanoid()
        obj && this._init(obj)
    }

    resetInit?(obj: I, isCheckReset?: boolean): this {
        return this._init(obj, isCheckReset)
    }
}
