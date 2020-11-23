/**
 * The constructor Legend
 * You need create file "legend.js" into src/lib and use "(new Legend({ your legend})).list"
 * @param obj - the object of manually list legend
 * @param isUseMainLegend - if true when the main list used else used only manually list
 */
import makeId from "../../common/makeId";
import { coreIcons } from "../icons/icons";
import { coreDescriptions } from "../descriptions/descriptions";

class Legend {
    constructor(obj = [], isUseMainLegend = true) {
        this._list = Array.isArray(obj) ? obj : [obj]

        if (isUseMainLegend) {
            this._list.push({
                icon: coreIcons.PENCIL,
                description: coreDescriptions.EDIT,
            })
        }

        makeId(this._list)
    }

    get list() {
        return this._list
    }
}

export const mainLegend = new Legend().list

export default Legend
