import "./columnsFactory.scss"

/**
 * ColumnsFactory
 * This is the list of table columns.
 */

class ColumnsFactory {
    constructor(obj = {}) {
        this.columns = []
        this.classesHeader = "template-columns-factory-header"
        this.classesContent = "template-columns-factory-content"
        this.styleSmallHeader = { width: "80px" }
        this.init(obj)
    }

    init(obj) {
        Object.keys(obj).forEach(key => {
            this[key] = obj[key]
        })
    }

    get columns() {
        return this._columns
    }

    set columns(value) {
        value.forEach(_ => {
            _.title = true
            _.headerTitle = true
            _.classes = this.classesContent
            _.headerClasses = this.classesHeader
        })

        this._columns = value
    }
}

export default ColumnsFactory
