/**
 * SearchParamsEntity
 * dont created "id" -> watch solution of template
 * Use this.parseDate for parsing string to date
 * Use this.parseField for all else
 * After field adding, you need generate getters and setters(if necessary)
 */
import Entity from "../../../../core/entitys/entity/entity"

class DemoEntity extends Entity {
    constructor(object, parent = {}) {
        super(object, parent)

        /**
         * Your code here ...
         */

        this._personId = this.parseField(this._personId, "")
        this._sspId2 = this.parseField(this._sspId2, "")
        this._studentName = this.parseField(this._studentName, "")
        this._numberGroup = this.parseField(this._numberGroup, "")
        //this._date =  this.parseDate(this._date, '')
    }

    /**
     * Your code here ...
     */

    get personId() {
        return this._personId
    }

    get sspId2() {
        return this._sspId2
    }

    get studentName() {
        return this._studentName
    }

    get numberGroup() {
        return this._numberGroup
    }
}

export default DemoEntity
