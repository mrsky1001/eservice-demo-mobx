/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

export interface IDemoPage {
    title: string
    content: string
    components: string
    route: string
    icon: string
}

export interface IDemoRowPage {
    columns: IDemoPage[]
}
