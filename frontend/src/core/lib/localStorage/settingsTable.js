class SettingsTable {
    constructor(tableName) {
        this._table = tableName

        this.reload()

        this._sizePerPage = this.getField("sizePerPage", 5)
        this._paginationSize = this.getField("paginationSize", 5)
        this._page = this.getField("page", 1)
    }

    get page() {
        this.getField("page", 1)
        return this._page
    }

    set page(value) {
        this.saveField("page", value)
        this.getField("page", 1)
    }

    get sizePerPage() {
        this.getField("sizePerPage", 5)
        return this._sizePerPage
    }

    set sizePerPage(value) {
        this.saveField("sizePerPage", value)
        this.getField("sizePerPage", 5)
    }

    get paginationSize() {
        this.getField("sizePerPage", 5)
        return this._paginationSize
    }

    set paginationSize(value) {
        this.saveField("paginationSize", value)
        this.getField("sizePerPage", 5)
    }

    reload() {
        this._settingsApp = this.settingsApp()
        this._settingsTable = this.settingsTable()
    }

    settingsApp() {
        try {
            const settingsApp = JSON.parse(localStorage.getItem("settingApp"))

            if (typeof settingsApp !== "object" || settingsApp === null) {
                localStorage.setItem("settingApp", JSON.stringify({}))
                return {}
            }

            return settingsApp
        } catch (e) {
            localStorage.setItem("settingApp", JSON.stringify({}))
            return {}
        }
    }

    settingsTable() {
        if (typeof this._settingsApp[this._table] !== "object") {
            this._settingsApp[this._table] = {}
        }

        return this._settingsApp[this._table]
    }

    getField(name, replace = "") {
        this.reload()

        try {
            const value = this._settingsTable[name]

            if (value !== undefined) return value

            return replace
        } catch (e) {
            return replace
        }
    }

    saveField(name, value) {
        this._settingsTable[name] = value
        localStorage.setItem("settingApp", JSON.stringify(this._settingsApp))
    }
}

export default SettingsTable
