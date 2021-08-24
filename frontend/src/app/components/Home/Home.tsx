/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './Home.scss'

import React from 'react'
import Card from 'react-bootstrap/Card'

import pagesStore from '../../lib/store/pages-store'
import { Button, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

export default observer(() => {
    return (
        <Card className={'home-form'}>
            <Card.Header>
                Демо-примеры построения компонентов на стеке: TypeScript + ReactJS + MOBX. Версия ядра v2.0.1
            </Card.Header>
            <Card.Body>
                <Row className={'row-body'}>
                    {pagesStore.examples.map((example) => (
                        <Card key={example.title} className={'card-form'}>
                            <div className={'icon-container'}>
                                <i className={example.icon} />
                            </div>
                            <Card.Body>
                                <Card.Title>{example.title}</Card.Title>
                                <div>
                                    <Card.Text>{example.content}</Card.Text>
                                    <div>
                                        <Card.Subtitle>Компоненты:</Card.Subtitle>
                                        <Card.Text>{example.components}</Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className={'show-button'}>
                                <Button href={example.route} variant={'primary'}>
                                    Посмотреть
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Card.Body>
            <Card.Footer>* - Данный примеры работают с версии ядра v1.1.0</Card.Footer>
        </Card>
    )
})
