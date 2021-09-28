/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './PageTemplate.scss'

import React from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
import pagesStore from '../../../lib/store/pages-store'
import ColApp from '../../../../core/components/ColApp/ColApp'
import routes from '../../../lib/routes'

interface ITemplatePage {
    leftLG?: number
    centerLG?: number
    currentPage: number
    component: React.ReactElement
}

export const PageTemplate = (props: ITemplatePage): JSX.Element => {
    const leftLG = props.leftLG ? props.leftLG : 3
    const centerLG = props.centerLG ? props.centerLG : 5

    const prevPage =
        props.currentPage < 1 ? { route: routes.HOME, title: 'Главная' } : pagesStore.examples[props.currentPage - 1]
    const nextPage =
        props.currentPage > pagesStore.examples.length - 2
            ? { route: routes.HOME, title: 'Главная' }
            : pagesStore.examples[props.currentPage + 1]

    return (
        <div className={'template-page'}>
            <Row>
                <Col lg={leftLG} md={0} />
                <Col lg={centerLG} md={0}>
                    <div className={'links'}>
                        <NavLink className={'link-page'} href={prevPage.route}>
                            {prevPage.title}
                        </NavLink>
                        <NavLink className={'link-page'} href={nextPage.route}>
                            {nextPage.title}
                        </NavLink>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={leftLG} md={0} />
                <ColApp lg={centerLG} md={12} body={props.component} />
            </Row>
        </div>
    )
}
