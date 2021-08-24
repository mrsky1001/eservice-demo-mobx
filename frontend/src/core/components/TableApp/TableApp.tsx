/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './TableApp.scss'

import BootstrapTable from 'react-bootstrap-table-next'
import React from 'react'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator'
import { SearchTableApp } from './extensions/SearchTableApp/SearchTableApp'
import { LoaderOverlay } from '../LoaderOverlay/LoaderOverlay'
import { init, ITableAppProps } from './extensions/table-app'

export const TableApp = (props: ITableAppProps): JSX.Element => {
    const initState = init(props)

    const optionsPaginationFactory = {
        data: initState.data,
        columns: initState.columns,
        sizePerPage: 5,
        paginationSize: 5,
        totalSize: initState.data.length,
    }

    const contentTable = ({ paginationTableProps }) => {
        const pagination = initState.isPagination ? { ...paginationTableProps } : undefined

        return (
            <ToolkitProvider keyField={'id'} columns={initState.columns} data={initState.data} search>
                {(toolkitprops) => (
                    <div>
                        {initState.isSearched ? <SearchTableApp {...toolkitprops.searchProps} /> : null}
                        <BootstrapTable
                            keyField="id"
                            id={initState.id}
                            ref={initState.tableRef}
                            loading={initState.loading}
                            noDataIndication={initState.noDataIndication}
                            classes={initState.classes}
                            rowClasses={initState.rowClasses}
                            headerClasses={initState.headerClasses}
                            expandRow={initState.expandRow}
                            rowStyle={initState.rowStyle}
                            selectRow={initState.selectRow}
                            defaultSorted={initState.defaultSorted}
                            striped={initState.striped}
                            hover={initState.hover}
                            condensed={initState.condensed}
                            {...toolkitprops.baseProps}
                            {...pagination}
                        />
                    </div>
                )}
            </ToolkitProvider>
        )
    }

    return (
        <div className={'table-app'}>
            <LoaderOverlay loading={props.loading} />
            <PaginationProvider pagination={paginationFactory(optionsPaginationFactory)}>
                {contentTable}
            </PaginationProvider>
        </div>
    )
}
