import MyException from "./myException"

/**
 * The template exceptions
 * You need create file "exceptions.js" into src/lib and use "(new Exceptions({ your exceptions})).list"
 * @param param - param for insert in message
 * @param obj - the object of manually list exceptions
 * @returns {MyException}
 * @constructor
 */
class Exceptions {
    constructor(obj = {}) {
        this._list = obj

        this._list.ERROR = (param = "") => {
            return new MyException(1, "Ошибка!" + param)
        }

        this._list.ERROR_GET = (param = "") => {
            return new MyException(2, "Ошибка, не удалось получить данные!" + param)
        }

        this._list.ERROR_POST = (param = "") => {
            return new MyException(2, "Ошибка, не удалось отправить(запросить) данные!" + param)
        }

        this._list.EMPTY_PARAMS_WARNING = (param = "") => {
            return new MyException(3, "Внимание! Введите параметры для поиска!" + param)
        }

        this._list.EMPTY_RESPONSE_WARNING = (param = "") => {
            return new MyException(4, "Внимание! По введенным параметрам данные не найдены!" + param)
        }

        this._list.CHANGES_COMPETENCE = (param = "") => {
            return new MyException(5, "Внимание, " + param)
        }

        this._list.NOT_CHANGES = (param = "") => {
            return new MyException(6, "Внимание! Нет изменений." + param)
        }

        this._list.NOT_ERRORS = (param = "") => {
            return new MyException(7, "Внимание! Ошибки не найдены." + param)
        }

        this._list.GETTING_DATA = (param = "") => {
            return new MyException(8, "Получение данных с сервера..." + param)
        }

        this._list.GETTING_SUCCESS = (param = "") => {
            return new MyException(9, "Получение данных с сервера завершилось успешно!" + param)
        }

        this._list.POSTING_DATA = (param = "") => {
            return new MyException(10, "Отправка(запрос) данных на сервер..." + param)
        }

        this._list.POSTING_SUCCESS = (param = "") => {
            return new MyException(11, "Отправка(запрос) данных завершился успешно!" + param)
        }

        this._list.PUTTING_DATA = (param = "") => {
            return new MyException(12, "Запрос на изменение данных..." + param)
        }

        this._list.PUTTING_SUCCESS = (param = "") => {
            return new MyException(13, "Запрос на изменение данных завершился успешно!" + param)
        }

        this._list.DELETING_DATA = (param = "") => {
            return new MyException(14, "Запрос на удаление данных..." + param)
        }

        this._list.DELETING_SUCCESS = (param = "") => {
            return new MyException(15, "Запрос на удаление данных завершился успешно!" + param)
        }

        this._list.DELETING_SUCCESS = (param = "") => {
            return new MyException(15, "Запрос на удаление данных завершился успешно!" + param)
        }
    }

    get list() {
        return Object.freeze(this._list)
    }
}

export const coreExceptions = new Exceptions().list

export default Exceptions
