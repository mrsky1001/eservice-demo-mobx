import "toasted-notes/src/styles.css"
import { toast } from "react-toastify"

/**
 * Toaster
 * Pool up messenger of app.
 * Dont change this file!!!
 */

class Toaster {
    constructor(msg = "", type = toast.TYPE.INFO) {
        this.msg = msg
        this.type = type
        this.notify(msg, type)
    }

    notify(msg, type = toast.TYPE.INFO) {
        this.toastId = toast(msg, { type: type, autoClose: type === toast.TYPE.INFO ? false : 10000 })
    }

    update(msg = this.msg, type = this.type) {
        toast.update(this.toastId, { render: msg, type: type, autoClose: 10000 })
    }

    dismiss() {
        toast.dismiss(this.toastId)
    }
}

export default Toaster
