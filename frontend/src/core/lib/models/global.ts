/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { OptionSelect } from './option-select'
import { IInit, Init } from './init'

export type IGlobal = IInit

export class Global<I, T> extends Init<I, T> implements IGlobal {
    constructor(obj: IGlobal) {
        super(obj)
    }

    toSelectOption(nameFiled: string, labelField = nameFiled, icon = ''): OptionSelect {
        return new OptionSelect({ label: this[labelField], value: this[nameFiled], icon: icon })
    }
}
