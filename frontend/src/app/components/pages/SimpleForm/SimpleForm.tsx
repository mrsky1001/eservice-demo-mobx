import './SimpleForm.scss'

import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import pagesStore from '../../../lib/store/pages-store'
import formStore from '../../../lib/store/pages/simple-form-store'
import { Col, NavLink, Row } from 'react-bootstrap'
import ColApp from '../../../../core/components/ColApp/ColApp'
import routes from '../../../lib/routes'

export default observer(() => {
    const currentPageRowNum = 0
    const currentPageColNum = 0
    const prevPage = { route: routes.HOME, title: 'Главная' }
    const nextPage = pagesStore.examplesRows[currentPageRowNum].columns[currentPageColNum + 1]

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): React.MouseEvent<HTMLElement> => {
        formStore.handlerSubmit()
        e.preventDefault()
        return e
    }

    return (
        <Row>
            <Col lg={3} md={0} />
            <ColApp
                lg={5}
                md={12}
                body={
                    <>
                        <Row>
                            <Col>
                                <NavLink href={prevPage.route}>{`<< ${prevPage.title}`}</NavLink>
                            </Col>
                            <Col>
                                <NavLink href={nextPage.route} className={'pull-right'}>
                                    {`${nextPage.title} >>`}
                                </NavLink>
                            </Col>
                        </Row>
                        <Card className={'simple-form justify-content-center'}>
                            <Card.Header>Проста форма</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label>{'Введите "Имя пользователя" и посмотрите результат!'}</Form.Label>
                                    <FormControlApp
                                        label={'Имя пользователь'}
                                        value={formStore.userName}
                                        onChange={formStore.changeUserName.bind(formStore)}
                                    />
                                    <FormControlApp
                                        as={'textarea'}
                                        label={'Вывод'}
                                        value={formStore.info}
                                        isDisabled={true}
                                        onChange={formStore.changeInfo.bind(formStore)}
                                    />
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={handleSubmit} className={'pull-right button'} variant={'primary'}>
                                    <i className={'fa fa-arrow'} />
                                    Вывести
                                </Button>
                            </Card.Footer>
                        </Card>
                    </>
                }
            />
        </Row>
    )
})
