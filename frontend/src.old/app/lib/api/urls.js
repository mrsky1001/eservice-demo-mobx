import Address from "../../../core/lib/api/address"
import exceptions from "../common/exceptions"
import Urls from "../../../core/lib/api/urls"

/**
 * Urls
 * This is the list of addresses to backend controllers.
 * Your will need add URLs to backend new controllers.
 */
const urls = new Urls({
    /**
     * Your code here ...
     */
    LIST: new Address("list", exceptions.ERROR_GET(), exceptions.ERROR_POST()),
    TEST_LIST: new Address("test-list", exceptions.ERROR_GET(), exceptions.ERROR_POST()),
}).list

export default urls
