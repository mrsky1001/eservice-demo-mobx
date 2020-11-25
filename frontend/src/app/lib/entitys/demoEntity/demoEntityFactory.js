import getEntityFactory from "../../../../core/entitys/entity/entityFactory"
import DemoEntity from "./demoEntity"

/**
 * SearchParamsEntityFactory
 * It is template-parent for Entity.
 *
 * Dont change this file (except for SearchParamsEntity for yours future Entity's)!
 */
class DemoEntityFactory extends getEntityFactory(DemoEntity) {
    constructor(list) {
        super(list)
    }
}

export default DemoEntityFactory
