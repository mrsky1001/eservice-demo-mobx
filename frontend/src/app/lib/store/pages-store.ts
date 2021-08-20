import { makeAutoObservable } from 'mobx'
import { IDemoPage, IDemoRowPage } from '../models/demo-page'
import routes from '../routes'

interface IPagesStore {
    examples: IDemoPage[]
}

class PagesStore implements IPagesStore {
    examples = [
        {
            title: 'Простая форма',
            content: 'Заполнение и вывод результата на экран.',
            components: 'FormInputCustom, Button',
            route: '#' + routes.SIMPLE_FORM,
            icon: 'fa fa-square-o',
        },
        {
            title: 'Форма с полем выбора из списка',
            content: 'Список групп для выбора и отображения определенного значения.',
            components: 'FormSelectApp, Button',
            route: '#' + routes.SELECT_FORM,
            icon: 'fa fa-list-alt',
        },
        {
            title: 'Форма с валидацией полей',
            content: 'Проверка заполненных полей (типы полей: текстовое, числовое, email, пароль, дата).',
            components: 'FormControlCustom, Button',
            route: '#' + routes.VALID_FORM,
            icon: 'fa fa-check-square-o',
        },
        {
            title: 'Простая таблица',
            content: 'Вывод данных в таблицу.',
            components: 'TableCustom, FormInputCustom, Button',
            route: '#' + routes.SIMPLE_TABLE,
            icon: 'fa fa-table',
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

export default new PagesStore()
