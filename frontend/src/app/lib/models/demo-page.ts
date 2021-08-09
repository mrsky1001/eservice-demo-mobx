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
