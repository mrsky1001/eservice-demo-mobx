/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './TableStudents.scss'

import React, { useContext } from 'react'
import { TableApp } from '../../../../../../../core/components/TableApp/TableApp'
import columns from './extensions/columns'
import { observer } from 'mobx-react-lite'
import { TableStudentsContext } from '../ExpandRow'
import Group from '../../../../../../lib/models/group'

export default observer(() => {
    // @ts-ignore
    const group: Group = new Group(useContext(TableStudentsContext))

    return (
        <TableApp id={'simpleTable'} data={group.students} columns={columns} isSearched={false} isPagination={false} />
    )
})
