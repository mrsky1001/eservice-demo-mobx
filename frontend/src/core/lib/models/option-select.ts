/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { IInit, Init } from './init'

export interface IOptionSelect extends IInit {
    value: string
    label: string
    icon?: string
}

export class OptionSelect extends Init<IOptionSelect, OptionSelect> implements IOptionSelect {
    value: string
    label: string
    icon?: string

    constructor(obj: IOptionSelect) {
        super(obj)
    }
}
