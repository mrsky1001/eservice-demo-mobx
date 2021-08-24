/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './ExpandableTable.scss'

import React from 'react'
import Card from 'react-bootstrap/Card'
import tableStore from '../../../lib/store/pages/expand-table-store'
import { TableApp } from '../../../../core/components/TableApp/TableApp'
import columns from './extensions/columns'
import { observer } from 'mobx-react-lite'
import { TemplatePage } from '../../TemplatePage/TemplatePage'
import ExpandRow from './extensions/ExpandRow/ExpandRow'

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
                        <TableApp
                            id={'expandTable'}
                            data={tableStore.groups}
                            columns={columns}
                            expandRow={ExpandRow({ onlyOneExpanding: false })}
                        />
                    </Card.Body>
                </Card>
            }
        />
    )
})
