import MyException from "../templates/exceptions/myException"
import { coreExceptions } from "../templates/exceptions/exceptions"

/**
 * Address of address for url of backend.
 * Dont change this file!!!
 */
class Address {
    constructor(url, errorGet = coreExceptions.ERROR(), errorPost = coreExceptions.ERROR()) {
        if (typeof url === "string") this._url = url
        else throw new TypeError()

        if (errorGet instanceof MyException) this.errorGet = errorGet
        else throw new TypeError("error instanceof MyExceptions")

        if (errorPost instanceof MyException) this.errorPost = errorPost
        else throw new TypeError("error instanceof MyExceptions")
    }

    get url() {
        return this._url
    }

    get urlForGet() {
        return this._url + "/"
    }

    get urlForPost() {
        return this._url
    }

    setParams(...params) {
        try {
            if (params === undefined || (params[0] instanceof Array && params[0][0] === undefined) || params[0][0].length === 0) {
                this.params = []
            } else if (params[0][0] instanceof Array) {
                this.params = [].concat(params[0][0])
            } else if (params[0] instanceof Array) {
                this.params = [].concat(params[0])
            } else throw new TypeError("param instanceof Array")

            if (this.params.length !== this._url.split(":").length - 1) {
                throw new TypeError("Incorrect count input params!")
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    // getParamsString() {
    //     let url = ""
    //     let split = "/"
    //
    //     this.params.forEach(function (param) {
    //         url += split + param
    //     })
    //
    //     return url
    // }

    // parseUrl() {
    //     const params = []
    //     this._url.split('/').map((item) => {
    //         if (item[0] === ':')
    //             params.push(item.replace(':', ''))
    //     })
    //
    //     return params
    // }

    getUrlParameterizedString(...params) {
        this.setParams(params)

        let countParams = 0
        return this._url
            .split("/")
            .map(item => {
                if (item[0] === ":") {
                    item = this.params[countParams]
                    countParams++
                }
                return item
            })
            .join("/")
    }
}

export default Address
