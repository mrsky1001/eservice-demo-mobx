import * as settingsService from "../../../settingsService"
import Address from "./address";

/**
 * The constructor ListUrls
 * You need create file "urls.js" into src/api and use "(new Urls({ your urls})).list"
 * @param obj - the object of manually list urls
 */
class Urls {
    constructor(obj = {}) {
        this._list = obj
        this._list.DOMAIN = new Address(settingsService.domainUrl)
        this._list.BACKEND = new Address(settingsService.domainUrl + "/backend")
        this._list.KEEPALIVE = new Address(settingsService.domainUrl + "/backend/auth/probe_auth")
        this._list.LOGOUT = new Address(settingsService.domainUrl + "/backend/j_xdomain_logout")
    }

    get list() {
        return this._list
    }
}

export const coreUrls = new Urls().list
export default Urls
