import './SimpleForm.scss'

import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import formStore from '../../../lib/store/pages/simple-form-store'
import { Col, Row } from 'react-bootstrap'
import ColApp from '../../../../core/components/ColApp/ColApp'

export default observer(() => {
    return (
        <Row>
            <Col lg={3} md={0} />
            <ColApp
                lg={5}
                md={12}
                body={
                    <Card className={'simple-form justify-content-center'}>
                        <Card.Header>Проста форма</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Label>Введите "Имя пользователя" и посмотрите результат!</Form.Label>
                                <FormControlApp
                                    label={'Имя пользователь'}
                                    onChange={formStore.changeUserName}
                                    value={formStore.userName}
                                />
                                <FormControlApp
                                    as={'textarea'}
                                    label={'Вывод'}
                                    onChange={formStore.changeInfo}
                                    value={formStore.info}
                                    isDisabled={true}
                                />
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                onClick={formStore.handlerSubmit}
                                className={'pull-right button'}
                                variant={'primary'}
                            >
                                <i className={'fa fa-arrow'} />
                                Результат
                            </Button>
                        </Card.Footer>
                    </Card>
                }
            />
        </Row>
    )
})
