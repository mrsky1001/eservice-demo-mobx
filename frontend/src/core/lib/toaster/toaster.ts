/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import 'toasted-notes/src/styles.css'
import 'animate.css'
import { cssTransition, toast, ToastId, TypeOptions } from 'react-toastify'
import './toaster.scss'

/**
 * Toaster
 * Pool up messenger of app.
 * Dont set this file!!!
 */
const fade = cssTransition({
    enter: 'animate__fadeInDown',
    exit: 'animate__fadeOutUp',
})

interface IToaster {
    toastId?: ToastId
    msg: string
    type: TypeOptions
}

class Toaster implements IToaster {
    msg = ''
    toastId = null
    type: TypeOptions = toast.TYPE.INFO

    constructor(obj: IToaster) {
        this.msg = obj.msg
        this.type = obj.type
        this.notify(obj.msg, obj.type)
    }

    notify(msg: string, type?: TypeOptions): void {
        this.toastId = toast(msg, { type: type, autoClose: type === toast.TYPE.INFO ? false : 10000, transition: fade })
    }

    update(msg = this.msg, type = this.type): void {
        toast.update(this.toastId, { render: msg, type: type, autoClose: 10000, transition: fade })
    }

    dismiss(): void {
        toast.dismiss(this.toastId)
    }
}

export default Toaster
