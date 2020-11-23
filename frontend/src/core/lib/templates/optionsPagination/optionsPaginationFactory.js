import React from "react"

/**
 * OptionsPaginationFactory
 *  settings of app tables.
 * Dont change this file!!!
 */

class OptionsPaginationFactory {
    constructor(obj = {}, settingsTable) {
        this._totalSizeDefault = 1
        this._pageDefault = 1
        this._paginationSizeDefault = 5
        this._settingsTable = settingsTable
        this._options = this.default()
        this.init(obj)
    }

    get options() {
        return this._options
    }

    default() {
        return {
            keyField: "id",
            custom: true,
            showTotal: true,
            hover: true,
            data: [],
            page: this._settingsTable.page,
            sizePerPage: this._settingsTable.sizePerPage,
            totalSize: this._totalSizeDefault,
            paginationSize: this._totalSizeDefault,
            sizePerPageOptionRenderer: this.sizePerPageOption,
            onSizePerPageChange: sizePerPage => this.onSizePerPageChange(sizePerPage, this._settingsTable),
            onPageChange: page => this.onPageChange(page, this._settingsTable),
        }
    }

    onSizePerPageChange(sizePerPage, settingsTable) {
        settingsTable.sizePerPage = sizePerPage
    }

    init(obj) {
        Object.keys(obj).forEach(key => {
            this._options[key] = obj[key]
        })
        /**
         * The check of empty data
         */
        if (this._options.data.length > 0) this._options.totalSize = this._options.data.length
        else this._options.totalSize = this._totalSizeDefault

        /**
         * The check of the one page size and the data size
         */
        if (this._options.sizePerPage > this._options.totalSize) this._options.sizePerPage = this._options.totalSize

        /**
         * The check of the one page size and the data size
         */
        if (this._options.totalSize < this._options.sizePerPage) this._options.paginationSize = this._options.totalSize
        else this._options.paginationSize = this._paginationSizeDefault

        if (this._settingsTable.page * this._options.sizePerPage - this._options.totalSize >= this._options.sizePerPage)
            this._options.page = this._pageDefault
        else this._options.page = this._settingsTable.page

        this.onPageChange(this._options.page, this._settingsTable)

        this._options.sizePerPageList = [
            {
                text: "5",
                value: 5,
            },
            {
                text: "10",
                value: 10,
            },
            {
                text: "Все",
                value: this._options.totalSize,
            },
        ]
    }

    onPageChange(page, settingsTable) {
        settingsTable.page = page
    }

    sizePerPageOption({ text, page, onSizePerPageChange }) {
        return (
            <li
                key={text}
                role={"presentation"}
                className={"dropdown-item"}
                onMouseDown={e => {
                    e.preventDefault()
                    onSizePerPageChange(page)
                }}
            >
                <a href={"#"} tabIndex={"-1"} role={"menuitem"} data-page={page}>
                    {text}
                </a>
            </li>
        )
    }
}

export default OptionsPaginationFactory
