import './SimpleTable.scss'

import React, { useEffect, useReducer } from 'react'
import Card from 'react-bootstrap/Card'
import TableCustom from '../../../../core/components/generic/TableCustom/TableCustom'
import SimpleDataFactory from '../../../entities/simpleTable/simpleData/simpleDataFactory'
import {
    actionsReducer,
    initReducer,
    reducerFactory,
} from '../../../../core/lib/templates/reducerFactory/reducerFactory'
import dataFromBackend from '../../../lib/dataFromBack/simpleTable/simpleTableData'
import Columns from './common/columns'

const SimpleTable = () => {
    const [dataFactory, dataDispatcher] = useReducer(reducerFactory, new SimpleDataFactory([]), initReducer())
    const columns = new Columns()

    useEffect(() => {
        dataDispatcher({ type: actionsReducer.INIT, value: new SimpleDataFactory(dataFromBackend) })
    }, [])

    console.log(dataFactory)

    return (
        <Card className={'simple-table-page justify-content-center'}>
            <Card.Header>Таблица со списком пользователей</Card.Header>
            <Card.Body>
                <TableCustom
                    id={'simpleTable'}
                    data={dataFactory.list}
                    dataFactory={dataFactory}
                    columnsFactory={columns}
                />
            </Card.Body>
        </Card>
    )
}
export default SimpleTable
