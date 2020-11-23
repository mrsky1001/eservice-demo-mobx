import makeId from "../../lib/tools/makeId"
import moment from "moment"

/**
 * Entity
 *  entity of app.
 * Dont change this file!!!
 */

class Entity {
    constructor(object = {}, parent = {}) {
        const srcId = object.id
        makeId(object, undefined, true)

        Object.keys(object).forEach(key => {
            this[key.startsWith("_") ? key : "_" + key] = object[key]
        })

        this._srcId = this.parseField(srcId, "")
        this._isSticky = this.parseField(this.isSticky, false)
        this._rowIndex = this.parseField(this.rowIndex, 0)
        this._parent = parent
    }

    get srcId() {
        return this._srcId
    }

    get rowIndex() {
        return this._rowIndex
    }

    set rowIndex(value) {
        this._rowIndex = value
    }

    get isSticky() {
        return this._isSticky
    }

    set isSticky(value) {
        this._isSticky = typeof value === "boolean" ? value : false
    }

    get nameToSelect() {
        return this._nameToSelect === undefined ? "" : this._nameToSelect
    }

    get labelToSelect() {
        return this._labelToSelect === undefined ? this._nameToSelect : this._labelToSelect
    }

    get parent() {
        return this._parent
    }

    get id() {
        return this._id
    }

    get transpose() {
        return Object.keys(this).map(item => {
            return {
                name: item,
                value: this[item],
            }
        })
    }

    get json() {
        return this._parent.toJson(this, this)
    }

    clearChanged() {}

    /**
     * Method checking fields(without excluded) on empty
     * @returns {*}
     */
    isEmpty() {
        const checkEmptyObj = obj => {
            return !Object.keys(obj)
                .map(key => {
                    if (this._parent._listExcludedTag.includes(key)) return true
                    else return this._parent._listEmptyTag.includes(obj[key])
                })
                .includes(false)
        }

        return checkEmptyObj(this)
    }

    /**
     * Method transform current object to select-format
     * (for plugin of SelectComponent)
     * @param name - name of field the current object
     * @param label - some field or array of the fields names of the current object is containing description-text
     * @param splitter - The sign of labels split
     * @returns {{name: *, label: *}}
     */
    toSelectFormat(name = this.nameToSelect, label = this.labelToSelect, splitter = " ") {
        const listLabels = Array.isArray(label) ? label : [label]

        let resText = ""
        listLabels.forEach(_ => (resText += splitter + this[_]))

        if (this.isEmpty()) return { id: "", label: "", value: "" }
        else return { id: this.id, label: resText, value: this[name] }
    }

    /**
     * Method parsing the string/boolean field
     * @param field - the filed name
     * @param replacement - the replacement value of the null/undefined field
     * @param insert - the value is insert after successfully checking
     * @return {*}
     */
    parseField(field, replacement, insert = field) {
        return field === undefined || String(field).length === 0 ? replacement : insert
    }

    /**
     * Method parsing the number field
     * @param field - the filed name
     * @param replacement - the replacement value of the null/undefined field
     * @param insert - the value is insert after successfully checking
     * @return {*}
     */
    parseNumber(field, replacement, insert = field) {
        return field === undefined || isNaN(Number(field)) ? replacement : Number(insert)
    }

    /**
     * Method parsing the date field
     * @param field - the filed name
     * @param replacement - the replacement value of the null/undefined field
     * @return {*}
     */
    parseDate(field, replacement) {
        if (String(field).length === 10 && field[2] === "." && field[5] === ".") return field

        const res = moment(field).format("DD.MM.YYYY")

        return moment(res, "DD.MM.YYYY").isValid() ? res : replacement
    }

    /**
     * Method parsing the object field
     * @param field - the filed name
     * @param replacement - the replacement value of the null/undefined field
     * @param className - the class name of the object constructor
     * @return {*}
     */
    parseObj(field, replacement, className) {
        return field === undefined || typeof field !== "object" ? replacement : new className(field)
    }

    /**
     * Method parsing the list object field
     * @param field - the filed name
     * @param replacement - the replacement value of the null/undefined field
     * @param replacementElem - the replacement value of the null/undefined list elem
     * @param className - the class name of the object constructor
     * @return {*}
     */
    parseListObj(field, replacement, replacementElem, className) {
        if (Array.isArray(field)) return field.map(_ => this.parseObj(_, replacementElem, className))
        else return replacement
    }
}

export default Entity
