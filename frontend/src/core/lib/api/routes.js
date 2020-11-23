/**
 * The constructor Routes
 * You need create file "routes.js" into src/api and use "(new Routes({ your routes})).list"
 * @param obj - the object of manually list routes
 */
import Address from "./address";
import { coreExceptions } from "../templates/exceptions/exceptions";

class Routes {
    constructor(obj = {}) {
        this._list = obj
        this._list.ROOT = new Address("/", coreExceptions.ERROR_GET(), coreExceptions.ERROR_POST())
        this._list.INDEX = new Address("/index.html", coreExceptions.ERROR_GET(), coreExceptions.ERROR_POST())
        this._list.ANY = new Address("*", coreExceptions.ERROR_GET(), coreExceptions.ERROR_POST())
        this._list.HASH = new Address("#", coreExceptions.ERROR_GET(), coreExceptions.ERROR_POST())
    }

    get list() {
        return Object.freeze(this._list)
    }
}

export const coreRoutes = new Routes().list

export default Routes
