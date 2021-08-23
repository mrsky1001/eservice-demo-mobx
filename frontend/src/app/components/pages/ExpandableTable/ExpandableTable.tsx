import './ExpandableTable.scss'

import React from 'react'
import Card from 'react-bootstrap/Card'
import tableStore from '../../../lib/store/pages/edit-table-store'
import { TableApp } from '../../../../core/components/TableApp/TableApp'
import columns from './common/columns'
import { observer } from 'mobx-react-lite'
import { TemplatePage } from '../../TemplatePage/TemplatePage'

export default observer(() => {
    return (
        <TemplatePage
            currentPage={5}
            leftLG={2}
            centerLG={8}
            component={
                <Card>
                    <Card.Header>Расширяемая таблица со списком пользователей</Card.Header>
                    <Card.Body>
                        <TableApp id={'editTable'} data={tableStore.users} columns={columns} />
                    </Card.Body>
                </Card>
            }
        />
    )
})
