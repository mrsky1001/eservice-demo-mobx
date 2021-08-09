import axios, { AxiosError, AxiosResponse } from 'axios'
import coreUrls from '../core-urls'
import history from '../history/create-browser-history'
import Toaster from '../toaster/toaster'
import { toast } from 'react-toastify'

export const isAuthorized = async (): Promise<boolean> => {
    return (await axios.get(coreUrls.PROBE_AUTH)).status === 200
}

export const keepalive = (): void => {
    let timer: number

    const resetTimer = () => {
        if (timer !== undefined) {
            clearTimeout(timer)
        }

        const keepaliveCall = async () => {
            return await axios.get('/backend/auth/probe_auth').then(() => {
                resetTimer()
            })
        }

        timer = setTimeout(keepaliveCall, 30000)
    }

    resetTimer()
}

export const handlerSuccess = (res: AxiosResponse, handler?: (val: any) => any): void => {
    if (res.data.success) {
        handler && handler(res.data.data)

        if (res.config.method !== 'get') {
            new Toaster({ msg: 'Операция выполнена успешно', type: toast.TYPE.SUCCESS })
        }
    } else {
        throw new Error(res.data.message)
    }
}

export const handlerError = (error: AxiosError): void => {
    console.error(error)
    new Toaster({ msg: error.message, type: toast.TYPE.ERROR })

    if (error.response !== undefined)
        if (error.response.status === 401) {
            history.push(coreUrls.BACKEND)
            history.go(0)
        } else if (error.response.status === 404) {
            history.push(coreUrls.DOMAIN)
        } else {
            history.push(coreUrls.DOMAIN)
        }

    //
    // if (error.response !== undefined)
    //     if (error.response.status === 401) {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    //         console.log(location)
    //         location.assign(coreUrls.BACKEND)
    //         history.go()
    //     } else if (error.response.status === 404) {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    //         history.push(coreUrls.DOMAIN)
    //     } else {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    //         history.push(coreUrls.DOMAIN)
    //     }

    // throw new Error(error)
}
