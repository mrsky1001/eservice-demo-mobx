import "../TableLegend.scss"

import React from "react"
import ColumnsFactory from "../../../../lib/templates/columnsFactory/columnsFactory";

class Columns extends ColumnsFactory {
    constructor(obj = {}) {
        super(obj)
        this.classesHeader = "table-legend-header"
        this.classesContent = "table-legend-content"

        this.columns = [
            {
                dataField: "icon",
                text: "Обозначение",

                classes: (cell, row) => {
                    const rowClasses = row.classes ? row.classes : null
                    return this.classesContent + " " + rowClasses
                },

                headerClasses: this.classesHeader,

                headerStyle: { width: "250px" },
                formatter: this.formatterIcon,
            },
            {
                dataField: "description",
                text: "Описание",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                align: "justify",
            },
        ]
    }

    formatterIcon(cell, row) {
        return (
            <div>
                {row.icon ? <i className={"fa fa-lg " + cell} /> : null}
                <div> {row.text} </div>
            </div>
        )
    }
}

export default Columns
