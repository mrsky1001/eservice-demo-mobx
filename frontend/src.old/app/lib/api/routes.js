import Address from "../../../core/lib/api/address"
import exceptions from "../common/exceptions"
import Routes from "../../../core/lib/api/routes"
/**
 * routes
 * This is the list of routes to frontend pages.
 * Your need adding URLS to new page into Router.
 */
const routes = new Routes({
    /**
     * Your code here ...
     */
    PAGE_DEMO: new Address("page_demo", exceptions.ERROR_GET()),
}).list

export default routes
