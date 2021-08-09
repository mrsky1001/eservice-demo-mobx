import BootstrapTable, {
    ColumnDescription,
    ExpandRowProps,
    SelectRowProps,
    SortOrder,
} from 'react-bootstrap-table-next'
import React from 'react'

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
    defaultSorted?: [{ dataField: any; order: SortOrder }]
    tableRef?: React.LegacyRef<BootstrapTable<any, number>>
    rowClasses?: string
    noDataIndication?: string | JSX.Element | (() => string | JSX.Element)
    rowStyle?: React.CSSProperties | ((row: any, rowIndex: number) => React.CSSProperties)
}

export const init = (props: ITableAppProps): ITableAppProps => {
    let classes = props.classes
    classes = props.isFlexibleIPad ? classes + ' table-flex-ipad' : classes
    classes = props.isFlexibleIPhone ? classes + ' table-flex-iphone' : classes

    if (props.isColumnsHeader) {
        classes = props.isFlexibleIPhone ? classes + ' columns-header-iphone' : classes
        classes = props.isFlexibleIPad ? classes + ' columns-header-ipad' : classes
    }

    const columns = props.columns
    columns.forEach((column) => {
        column.title = true
        column.headerTitle = true
        column.classes = 'table-app-columns-content'
        column.headerClasses = 'table-app-columns-header'
        column.attrs = { 'data-label': column.text }
    })

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

    return Object.assign(emptyState, props, {
        classes: classes,
        columns: columns,

        rowClasses: props.isFirstRowBold ? props.rowClasses + ' first-bold' : props.rowClasses,
    })
}
