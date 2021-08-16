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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        formStore.handlerSubmit()
        e.preventDefault()
    }

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
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Введите "Имя пользователя" и посмотрите результат!</Form.Label>
                                <FormControlApp
                                    label={'Имя пользователь'}
                                    value={formStore.userName}
                                    onChange={(val) => formStore.changeUserName(String(val))}
                                />
                                <FormControlApp
                                    as={'textarea'}
                                    label={'Вывод'}
                                    value={formStore.info}
                                    isDisabled={true}
                                    onChange={(val) => formStore.changeInfo(String(val))}
                                />
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Button type={'submit'} className={'pull-right button'} variant={'primary'}>
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
