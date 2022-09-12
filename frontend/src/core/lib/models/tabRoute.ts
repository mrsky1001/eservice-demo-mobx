import {IInit, Init} from './init'

export interface ITabRoute extends IInit {
    url: string
    label: string
    icon?: string
}

export class TabRoute extends Init<ITabRoute, TabRoute> implements ITabRoute {
    url: string
    label: string
    icon?: string

    constructor(obj: ITabRoute) {
        super(obj)
    }
}

