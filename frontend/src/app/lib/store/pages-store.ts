import { makeAutoObservable } from 'mobx'
import { IDemoRowPage } from '../models/demo-page'

interface IPagesStore {
    examplesRows: IDemoRowPage[]
}

class PagesStore implements IPagesStore {
    examplesRows = [
        {
            columns: [
                {
                    title: 'Простая форма',
                    content: 'Заполнение и вывод результата на экран.',
                    components: 'FormInputCustom, Button',
                    route: '#/simple-form',
                    icon: 'fa fa-form',
                },
                {
                    title: 'Форма с валидацией полей',
                    content: 'Проверка заполненных полей (типы полей: текстовое, числовое, email, пароль, дата).',
                    components: 'FormControlCustom, Button',
                    route: '#/valid-form',
                    icon: 'fa fa-form',
                },
                {
                    title: 'Простая таблица',
                    content: 'Вывод данных в таблицу.',
                    components: 'TableCustom, FormInputCustom, Button',
                    route: '#/simple-table',
                    icon: 'fa fa-table',
                },
            ],
        },
        {
            columns: [
                {
                    title: 'Форма с полем выбора из списка',
                    content: 'Список групп для выбора и отображения определенного значения.',
                    components: 'FormSelectApp, Button',
                    route: '#/select-form',
                    icon: 'fa fa-select',
                },
            ],
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

export default new PagesStore()
