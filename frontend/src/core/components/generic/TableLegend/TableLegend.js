import "./TableLegend.scss"

import React from "react"
import Columns from "./common/columns";
import TableCustom from "../TableCustom/TableCustom";

/**
 * TableLegend
 *  table legend of app.
 * Dont change this file!!!
 */

const TableLegend = ({ data = [{}] }) => {
    const columnsFactory = new Columns()

    return (
        <div>
            <TableCustom
                id={"tableLegend"}
                data={data}
                columnsFactory={columnsFactory}
            />
        </div>
    )
}
export default TableLegend
