/**
 * The constructor Descriptions
 * You need create file "legend.js" into src/lib and use "(new Descriptions({ your descriptions})).list"
 * @param obj - the object of manually list of description icons
 */
class Descriptions {
    constructor(obj = {}) {
        this._list = obj

        this._list.EDIT = "Редактировать"
        this._list.OPEN_LIST = "Открыть список"
        this._list.CHECKING = "Проверка"
        this._list.CLOSE = "Закрыть"
        this._list.SAVE = "Сохранить"
        this._list.SHOW_CHANGED = "Показать изменения"
        this._list.CHECKING_ORFO = "Проверка орфографии"
        this._list.LEGEND = "Легенда"
        this._list.BACK = "Вернуться"
        this._list.LIST_CLOSE = "Скрыть список"
        this._list.LIST_OPEN = "Раскрыть список"
        this._list.PIN = "Закрепить"
        this._list.UNPIN = "Открепить"
        this._list.UNPIN_ALL = "Сбросить закрепление"
        this._list.DELETE = "Удалить"
        this._list.PDF = "Скачать PDF"
        this._list.CLONE = "Создать на базе существующего"
        this._list.EXIT = "Выход"
        this._list.CANCEL = "Отмена"
        this._list.ALL_SERVICES = "Все сервисы"
    }

    get list() {
        return Object.freeze(this._list)
    }
}

export const coreDescriptions = new Descriptions().list

export default Descriptions
