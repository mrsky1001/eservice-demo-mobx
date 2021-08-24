/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import BootstrapTable, {
    ColumnDescription,
    ExpandRowProps,
    SelectRowProps,
    SortOrder,
} from 'react-bootstrap-table-next'
import React from 'react'
import { checkAndInsert } from '../../../lib/common'

interface IAttrs {
    'data-label'?: string
}

export interface IColumnDescription extends ColumnDescription {
    title?: boolean
    headerTitle?: boolean
    attrs?: IAttrs
}

export interface ITableAppProps {
    id: string
    data: any[]
    columns: IColumnDescription[]

    hover?: boolean
    striped?: boolean
    loading?: boolean
    condensed?: boolean
    isSearched?: boolean
    isSizerPage?: boolean
    isPagination?: boolean
    isFlexibleIPad?: boolean
    isFirstRowBold?: boolean
    isColumnsHeader?: boolean
    isFlexibleIPhone?: boolean

    classes?: string
    headerClasses?: string
    selectRow?: SelectRowProps<any>
    expandRow?: ExpandRowProps<any, number>
    cellEdit?: any
    defaultSorted?: [{ dataField: any; order: SortOrder }]
    tableRef?: React.LegacyRef<BootstrapTable<any, number>>
    rowClasses?: string
    noDataIndication?: string | JSX.Element | (() => string | JSX.Element)
    rowStyle?: React.CSSProperties | ((row: any, rowIndex: number) => React.CSSProperties)
}

export const init = (props: ITableAppProps): ITableAppProps => {
    const emptyState = {
        data: [],
        hover: false,
        striped: false,
        loading: false,
        condensed: false,
        isSearched: true,
        isSizerPage: true,
        isPagination: true,
        isFlexibleIPad: true,
        isFirstRowBold: false,
        isColumnsHeader: true,
        isFlexibleIPhone: true,
        noDataIndication: 'Нет данных',
    }

    const replacedProps = Object.assign(emptyState, props)

    let classes = replacedProps.classes ? replacedProps.classes : 'table-app'

    classes = checkAndInsert(replacedProps.isFlexibleIPad, classes, ' table-flex-ipad')
    classes = checkAndInsert(replacedProps.isFlexibleIPhone, classes, ' table-flex-iphone')

    if (replacedProps.isColumnsHeader) {
        classes = checkAndInsert(replacedProps.isFlexibleIPhone, classes, ' columns-header-iphone')
        classes = checkAndInsert(replacedProps.isFlexibleIPad, classes, ' columns-header-ipad')
    }

    const columns = replacedProps.columns
    columns.forEach((column) => {
        column.title = true
        column.headerTitle = true
        column.classes = 'table-app-columns-content'
        column.headerClasses = 'table-app-columns-header'
        column.attrs = { 'data-label': column.text }
    })

    return Object.assign(emptyState, replacedProps, {
        classes: classes,
        columns: columns,

        rowClasses: checkAndInsert(replacedProps.isFirstRowBold, replacedProps.rowClasses, ' first-bold'),
    })
}
