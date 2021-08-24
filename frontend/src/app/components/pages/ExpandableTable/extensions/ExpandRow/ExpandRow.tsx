import './ExpandRow.scss'
import React from 'react'
import TableStudents from './TableStudents/TableStudents'

interface IExpandRowProps {
    onlyOneExpanding: boolean
}

interface IExpandColumn {
    expanded: boolean
}

export const TableStudentsContext = React.createContext(TableStudents)

const ExpandRow = (props: IExpandRowProps): any => {
    const expandColumn = ({ expanded }: IExpandColumn) => {
        return <div>{expanded ? <i className={'fa fa-chevron-up'} /> : <i className={'fa fa-bars'} />}</div>
    }

    const expandHeaderColumn = (): JSX.Element => {
        return <i className={'fa fa-bars'} />
    }

    return {
        showExpandColumn: true,
        showExpandColumnAll: false,
        expandByColumnOnly: true,
        onlyOneExpanding: props.onlyOneExpanding,
        parentClassName: 'parent-expand',
        expandHeaderColumnRenderer: expandHeaderColumn,
        expandColumnRenderer: expandColumn,
        renderer(row): JSX.Element {
            return (
                <div>
                    <TableStudentsContext.Provider value={row}>
                        <TableStudents />
                    </TableStudentsContext.Provider>
                </div>
            )
        },
    }
}

export default ExpandRow
