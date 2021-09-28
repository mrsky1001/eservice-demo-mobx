/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './SimpleTable.scss'

import React from 'react'
import Card from 'react-bootstrap/Card'
import tableStore from '../../../lib/store/pages/table-store'
import { TableApp } from '../../../../core/components/TableApp/TableApp'
import columns from './extensions/columns'
import { observer } from 'mobx-react-lite'
import { PageTemplate } from '../../templates/PageTemplate/PageTemplate'

export default observer(() => {
    return (
        <PageTemplate
            currentPage={3}
            leftLG={2}
            centerLG={8}
            component={
                <Card>
                    <Card.Header>Таблица со списком пользователей</Card.Header>
                    <Card.Body>
                        <TableApp id={'simpleTable'} data={tableStore.users} columns={columns} />
                    </Card.Body>
                </Card>
            }
        />
    )
})
