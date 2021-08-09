import './Home.scss'

import React from 'react'
import Card from 'react-bootstrap/Card'

import pagesStore from '../../lib/store/pages-store'
import { Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

export default observer(() => {
    return (
        <Card className={'home-form'}>
            <Card.Header>Демонстрационные примеры работы с ReactJS. Версия ядра v1.1.0*</Card.Header>
            <Card.Body>
                {pagesStore.examplesRows.map((row, idx) => (
                    <Row key={idx} className={'row-body'}>
                        {row.columns.map((example) => (
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
                                    <Card.Link href={example.route}>Посмотреть</Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                ))}
            </Card.Body>
            <Card.Footer>* - Данный примеры работают с версии ядра v1.1.0</Card.Footer>
        </Card>
    )
})
