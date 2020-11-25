/**
 * EntityFactory
 *  factory entity of app.
 * Dont change this file!!!
 */

import { actionsReducer } from "../../lib/templates/reducerFactory/reducerFactory"

const getEntityFactory = entity => {
    return class EntityFactory {
        constructor(list = [], withReplace = false) {
            this._listEmptyTag = ["", undefined]
            this._listExcludedTag = ["_parent", "_listEmptyTag", "_listExcludedTag", "_originId"]

            this._list = this.parseList(list, withReplace)
            this._selected = this.first
            this._listChanges = []
            this._listErrors = []
            this._countErrors = 0
            this._selectedRows = []
            this._selectedRow = this._selected
            this._countChanged = 0
        }

        get selectedRow() {
            return this._selectedRow
        }

        set selectedRow(value) {
            this._selectedRow = value
        }

        get selectedRows() {
            return this._selectedRows
        }

        set selectedRows(value) {
            this._selectedRows = value
        }

        get first() {
            return this._list.length > 0 ? this._list[0] : this.empty
        }

        get empty() {
            return new entity({}, this)
        }

        get selected() {
            return this._selected
        }

        set selected(value) {
            const resElem = this._list.find(elem => String(elem.id) === String(value.id))
            this._selected = resElem === undefined ? this.empty : resElem
        }

        get list() {
            return this._list
        }

        get listChanges() {
            return this._listChanges
        }

        get countChanged() {
            return this._countChanged
        }

        get json() {
            return this.toJson(this, this)
        }

        get listErrors() {
            return this._listErrors
        }

        set listErrors(value) {
            this._listErrors = value
        }

        get countErrors() {
            return this._countErrors
        }

        set countErrors(value) {
            this._countErrors = value
        }

        groupsBy(nameProp = "id") {
            const listProp = [...new Set(this.list.map(item => item[nameProp]))]
            return listProp.map(prop => this.list.filter(_ => _[nameProp] === prop))
        }

        groupBy(value, nameProp = "id") {
            return this.list.filter(_ => _[nameProp] === value)
        }

        addError(competence) {
            if (!this._listErrors.includes(competence)) {
                this._listErrors.push(competence)
                this._countErrors++
            }
        }

        /**
         * The method for setup the selected rows of react-boostrap-table-next component
         * @param dispatch - the dispatcher of this obj
         * @param rowId
         * @param rowIndex
         */
        selectOneRow(dispatch, rowId, rowIndex) {
            let selectedRows = []
            const fined = this.selectedRows.find(_ => _.rowIndex === rowIndex)

            if (fined === undefined) {
                const selectedRow = this.getByValue("id", rowId)

                selectedRow.rowIndex = rowIndex
                selectedRows.push(selectedRow)

                dispatch({
                    type: actionsReducer.PROPERTY,
                    name: ["selectedRows", "selectedRow"],
                    value: [selectedRows, selectedRow],
                })
            } else {
                dispatch({
                    type: actionsReducer.PROPERTY,
                    name: "selectedRows",
                    value: [],
                })

                this.selectedRow = this.selected
            }
        }

        toJson(obj, source) {
            const replacePrivateSymbol = key => (key.indexOf("_") === 0 ? key.substr(1, key.length) : key)
            let res = {}

            if (obj.id !== source.id && "json" in obj) res = obj.json
            else
                Object.keys(obj).forEach(key => {
                    if (this._listExcludedTag.find(_ => _.includes(key)) === undefined) {
                        try {
                            if (Array.isArray(obj[key])) {
                                res[replacePrivateSymbol(key)] = []

                                obj[key].forEach(elem => {
                                    if (Array.isArray(obj[key]) || (typeof elem === "object" && elem !== null && "json" in elem))
                                        res[replacePrivateSymbol(key)].push(elem.json)
                                    else res[replacePrivateSymbol(key)].push(elem)
                                })
                            } else if (typeof obj[key] === "object" && obj[key] !== null && "json" in obj[key])
                                res[replacePrivateSymbol(key)] = obj[key].json
                            else if (replacePrivateSymbol(key) === "id" && String(obj["originId"]).length > 0)
                                res[replacePrivateSymbol(key)] = obj["originId"]
                            else res[replacePrivateSymbol(key)] = obj[key]
                        } catch (e) {
                            console.log(e)
                        }
                    }
                })

            return res
        }

        listSelectFormat(name, label = name) {
            return this._list.map(_ => _.toSelectFormat(name, label))
        }

        transpose() {
            return this.list.map(item => {
                return item.transpose
            })
        }

        isEmpty() {
            return (
                this._list.length === 0 ||
                !this._list
                    .map(elem => {
                        return elem.isEmpty()
                    })
                    .includes(false)
            )
        }

        isChanged() {
            return this._listChanges.length > 0
        }

        getCopyThis() {
            const obj = new this.__proto__.constructor(Object.assign([], this.list))
            obj.setSelected(this._selected === undefined ? this.first.id : this._selected.id)

            obj._listChanges = obj.list.filter(elem => {
                return (
                    this.listChanges.find(elem2 => {
                        return elem2.id === elem.id
                    }) !== undefined
                )
            })

            obj._countChanged = this.countChanged

            return obj
        }

        parseList(list, withReplace) {
            let arr = list

            if (typeof list === "object" && list.constructor.name === this.constructor.name) {
                arr = list.list
            } else if (!Array.isArray(list)) {
                arr = [list]
            }

            return arr.map(elem => {
                return new entity(elem, this, withReplace)
            })
        }

        push(elem) {
            this._list.push(new entity(elem))
        }

        remove(elem) {
            this._list.splice(
                this._list.findIndex(item => {
                    return item.id === elem.id
                }),
                1,
            )
        }

        setSelected(elemId) {
            const resElem = this._list.find(elem => String(elem.id) === String(elemId))
            this._selected = resElem === undefined ? this.empty : resElem
        }

        getByValue(name, value) {
            return this._list.find(elem => String(elem[name]) === String(value))
        }

        addChanged(elem) {
            if (!this._listChanges.includes(elem) && this._list.includes(elem)) {
                this._listChanges.push(elem)
                this._countChanged++
                // this._updateRender();
            }
        }

        listChangesJson() {
            return this._listChanges.map(elem => elem.json)
        }

        listJson() {
            return this._list.map(elem => elem.json)
        }

        clear() {
            this.clearChanged()
            this._list = []
            this._selected = this.first
        }

        clearChanged() {
            this._countChanged = 0
            this._countErrors = 0
            this._listChanges = []
            this._listErrors = []
            this._list.forEach(_ => _.clearChanged())
        }
    }
}

export default getEntityFactory
