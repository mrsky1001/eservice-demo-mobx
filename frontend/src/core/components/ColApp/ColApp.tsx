/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './ColApp.scss'
import React from 'react'
import { IColAppProps, init } from './extensions/col-app'
import Col from 'react-bootstrap/Col'

const ColApp = (props: IColAppProps): JSX.Element => {
    const initState = init(props)

    return (
        <Col className={initState.classes} xs={initState.xs} sm={initState.sm} md={initState.md} lg={initState.lg}>
            {initState.body}
        </Col>
    )
}
export default ColApp
