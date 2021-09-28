/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React from 'react'
import Card from 'react-bootstrap/Card'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Col, Row } from 'react-bootstrap'
import ColApp from '../../../../core/components/ColApp/ColApp'

interface ITemplateCode {
    title: string
    code: string
    leftLg?: number
    centerLg?: number
}

const CodeTemplate = (props: ITemplateCode): JSX.Element => (
    <Row className={'mt-5'}>
        <Col lg={props.leftLg ? props.leftLg : 2} md={0} />
        <ColApp
            lg={props.centerLg ? props.centerLg : 7}
            md={12}
            body={
                <Card className={'simple-form justify-content-center'}>
                    <Card.Header>{props.title}</Card.Header>
                    <Card.Body>
                        <SyntaxHighlighter language="javascript" style={nord}>
                            {props.code}
                        </SyntaxHighlighter>
                    </Card.Body>
                </Card>
            }
        />
    </Row>
)
export default CodeTemplate
