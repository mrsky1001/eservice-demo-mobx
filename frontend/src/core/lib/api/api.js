import axios from "axios/index"


import history from "./createBrowserHistory"
import { toast } from "react-toastify"
import { coreUrls } from "./urls";
import Toaster from "../toaster/toaster";
import { coreExceptions } from "../generic/exceptions/exceptions";
import Address from "./address";

/**
 * API
 * REST of app.
 * Dont change this file!!!
 */

class Api {
    static keepalive() {
        if (Api._timer !== undefined) {
            clearTimeout(Api._timer)
        }
        Api._timer = setTimeout(Api.keepaliveCall, 30000)
    }

    static async keepaliveCall() {
        return await axios.get(coreUrls.KEEPALIVE.urlForPost).then(function() {
            Api.keepalive()
        })
    }

    static async checkRes(res, toastPost, successMessage) {
        if (res !== undefined) {
            const data = res.data.success !== undefined ? res.data.data : res.data
            let typeMess

            if (res.data.success === undefined) {
                typeMess = res.status === 200 ? toast.TYPE.SUCCESS : toast.TYPE.ERROR
            } else {
                if (res.data.message.toLowerCase().includes(coreExceptions.NOT_CHANGES().message)) typeMess = toast.TYPE.WARNING
                else typeMess = String(res.data.success) === "true" ? toast.TYPE.SUCCESS : toast.TYPE.ERROR
            }

            if (typeMess === toast.TYPE.ERROR) {
                console.log(res)
                throw new Error(res.message)
            } else if (typeMess === toast.TYPE.WARNING) {
                toastPost.update(res.message === undefined ? res.data.message : res.message, typeMess)
            } else {
                toastPost.update(res.message === undefined ? successMessage : res.message, typeMess)
            }

            return data
        }
    }

    static async handlerCatch(url, toaster, error) {
        const errorMessage = new CustomError(error.message, url)
        console.log(errorMessage)
        toaster.update(errorMessage.msgToToast, toast.TYPE.ERROR)

        if (error.response !== undefined)
            if (error.response.status === 401) {
                history.push(coreUrls.BACKEND.urlForGet)
                history.go(coreUrls.BACKEND.urlForGet)
            } else if (error.response.status === 404) {
                history.push(coreUrls.DOMAIN.urlForGet)
            } else {
                history.push(coreUrls.ROOT.urlForGet)
            }

        throw new Error(error)
    }

    static async get(address, query = null, ...params) {
        if (address instanceof Address) {
            const url = coreUrls.BACKEND.urlForGet + address.getUrlParameterizedString(params)
            const toastGet = new Toaster(coreExceptions.GETTING_DATA().message, toast.TYPE.INFO)

            return await axios
                .get(url, { params: query })
                .then(function(response) {
                    Api.keepalive()

                    if (response.data.data === undefined) {
                        if (response.status !== undefined) {
                            toastGet.dismiss()
                            return response.data
                        }

                        throw new Error(address.errorGet.message)
                    } else if (response.data.data === null) {
                        throw new Error(address.errorGet.message)
                    } else {
                        toastGet.dismiss()
                        return response.data.data
                    }
                })
                .catch(function(error) {
                    Api.handlerCatch(url, toastGet, error)
                })
        } else throw new TypeError("API: address instanceof Address")
    }

    static async post(address, data, ...params) {
        if (address instanceof Address) {
            const url = coreUrls.BACKEND.urlForGet + address.getUrlParameterizedString(params)
            const toastPost = new Toaster(coreExceptions.POSTING_DATA().message, toast.TYPE.INFO)

            return await axios
                .post(url, data)
                .then(function(response) {
                    Api.keepalive()
                    return Api.checkRes(response, toastPost, coreExceptions.POSTING_SUCCESS().message)
                })
                .catch(function(error) {
                    Api.handlerCatch(url, toastPost, error)
                })
        } else throw new TypeError("API: address instanceof Address")
    }

    static async put(address, data, ...params) {
        if (address instanceof Address) {
            const url = coreUrls.BACKEND.urlForGet + address.getUrlParameterizedString(params)
            const toastPost = new Toaster(coreExceptions.PUTTING_DATA().message, toast.TYPE.INFO)

            return await axios
                .put(url, data)
                .then(function(response) {
                    Api.keepalive()
                    return Api.checkRes(response, toastPost, coreExceptions.PUTTING_SUCCESS().message)
                })
                .catch(function(error) {
                    Api.handlerCatch(url, toastPost, error)
                })
        } else throw new TypeError("API: address instanceof Address")
    }

    static async delete(address, data, ...params) {
        if (address instanceof Address) {
            const url = coreUrls.BACKEND.urlForGet + address.getUrlParameterizedString(params)
            const toastPost = new Toaster(coreExceptions.DELETING_DATA().message, toast.TYPE.INFO)

            return await axios
                .delete(url, data)
                .then(function(response) {
                    Api.keepalive()
                    return Api.checkRes(response, toastPost, coreExceptions.DELETING_SUCCESS().message)
                })
                .catch(function(error) {
                    Api.handlerCatch(url, toastPost, error)
                })
        } else throw new TypeError("API: address instanceof Address")
    }
}

export default Api
