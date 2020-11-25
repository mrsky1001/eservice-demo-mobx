import "./TableCustom.scss"

import React, { useMemo } from "react"
import BootstrapTable from "react-bootstrap-table-next"

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import paginationFactory, {
    PaginationListStandalone,
    PaginationProvider,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator"
import OptionsPaginationFactory from "../../../lib/templates/optionsPaginationFactory/optionsPaginationFactory";
import SettingsTable from "../../../lib/localStorage/settingsTable";
import LoaderOverlay from "../LoaderOverlay/LoaderOverlay";
import SearchCustom from "../SearchCustom/SearchCustom";

/**
 * The TableCustom is the react-boostrap-table template
 * @param id - name of table
 * @param data - list of data
 * @param dataFactory - the data object  from entities
 * @param tableRef - the table reference
 * @param loading - state of a loading status
 * @param columnsFactory - the columns object from classes
 * @param noDataIndication - the NO-DATA text-description
 * @param classes - the css-classes
 * @param rowClasses - the row css-classes
 * @param headerClasses - the header css-classes
 * @param defaultSorted - the sorted object like { name:'field-name', order:'asc or dsc'}
 * @param expandRow - the expanded row component
 * @param selectedRow - the selected row component
 * @param isSearched - on/off the search
 * @param isPagination - on/off the pagination
 * @param isSizerPage - on/off the sizerPage
 * @returns {JSX.Element}
 * @constructor
 */
const TableCustom = ({
    id,
    data,
    dataFactory,
    tableRef,
    loading,
    columnsFactory,
    noDataIndication,
    classes,
    rowClasses,
    headerClasses,
    defaultSorted,
    expandRow,
    selectedRow,
    isSearched = true,
    isPagination = true,
    isSizerPage = true,
}) => {
    const tableData = Array.isArray(data) ? data : [data]
    const settingsTableEmployee = new SettingsTable(id)
    const optionsPaginationFactory = useMemo(() => {
        return new OptionsPaginationFactory(
            {
                data: data,
                columns: columnsFactory.columns,
            },
            settingsTableEmployee,
        )
    }, [dataFactory])

    const contentTable = ({ paginationProps, paginationTableProps }) => (
        <ToolkitProvider keyField={"id"} columns={columnsFactory.columns} data={tableData} search>
            {toolkitprops => (
                <div>
                    {isSearched ? <SearchCustom {...toolkitprops.searchProps} /> : null}
                    <BootstrapTable
                        id={id}
                        ref={tableRef}
                        loading={loading}
                        noDataIndication={noDataIndication !== undefined ? noDataIndication : "Нет данных."}
                        classes={classes + " row-first-elem"}
                        rowClasses={rowClasses}
                        headerClasses={headerClasses}
                        expandRow={expandRow}
                        selectedRow={selectedRow}
                        defaultSorted={defaultSorted}
                        {...toolkitprops.baseProps}
                        {...paginationTableProps}
                    />
                    {isSizerPage ? (
                        <div className={"sizer-page"}>
                            <SizePerPageDropdownStandalone {...paginationProps} />
                            <p> Количество строк на странице </p>
                        </div>
                    ) : null}
                    {isPagination ? <PaginationListStandalone {...paginationProps} /> : null}
                </div>
            )}
        </ToolkitProvider>
    )

    return (
        <div>
            <LoaderOverlay loading={loading} />
            <PaginationProvider pagination={paginationFactory(optionsPaginationFactory.options)}>{contentTable}</PaginationProvider>
        </div>
    )
}

export default TableCustom
