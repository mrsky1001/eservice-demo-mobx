/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import { makeAutoObservable } from 'mobx'
import { IDemoPage } from '../models/demo-page'
import routes from '../routes'

interface IPagesStore {
    examples: IDemoPage[]
}

class PagesStore implements IPagesStore {
    examples = [
        {
            title: 'Простая форма',
            content: 'Заполнение и вывод результата на экран.',
            components: 'FormControlApp, Button',
            route: '#' + routes.SIMPLE_FORM,
            icon: 'fa fa-square-o',
        },
        {
            title: 'Форма с полем выбора из списка',
            content: 'Список групп для выбора и отображения определенного значения.',
            components: 'FormSelectApp, Button',
            route: '#' + routes.SELECT_FORM,
            icon: 'fa fa-minus-square-o',
        },
        {
            title: 'Форма с валидацией полей',
            content: 'Проверка заполненных полей (типы полей: текстовое, числовое, email, пароль, дата).',
            components: 'FormControlApp, Button',
            route: '#' + routes.VALID_FORM,
            icon: 'fa fa-check-square-o',
        },
        {
            title: 'Простая таблица',
            content: 'Вывод данных в таблицу.',
            components: 'TableApp, Button',
            route: '#' + routes.SIMPLE_TABLE,
            icon: 'fa fa-table',
        },
        {
            title: 'Редактируемая таблица',
            content: 'Редактирование данных в таблице.',
            components: 'TableApp, FormControlApp, Button',
            route: '#' + routes.EDIT_TABLE,
            icon: 'fa fa-address-card-o',
        },
        {
            title: 'Расширяемая таблица',
            content: 'Вывод сложных объектов в таблицу. Подстроки и раширение таблицы.',
            components: 'TableApp, Button',
            route: '#' + routes.EXPAND_TABLE,
            icon: 'fa fa-indent',
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

export default new PagesStore()
