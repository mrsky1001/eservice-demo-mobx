import getEntityFactory from "../entity/entityFactory"
import Sticky from "./Sticky"

class StickyFactory extends getEntityFactory(Sticky) {
    constructor(list) {
        super(list)
    }
}

export default StickyFactory
