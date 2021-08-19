import './ValidationForm.scss'

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import { Col, NavLink, Row } from 'react-bootstrap'
import ColApp from '../../../../core/components/ColApp/ColApp'
import formStore from '../../../lib/store/pages/validation-form-store'
import pagesStore from '../../../lib/store/pages-store'

export default observer(() => {
    const currentPageRowNum = 0
    const currentPageColNum = 1
    const prevPage = pagesStore.examplesRows[currentPageRowNum].columns[currentPageColNum - 1]
    const nextPage = pagesStore.examplesRows[currentPageRowNum].columns[currentPageColNum + 1]

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
        const form = e.currentTarget

        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }

        formStore.setValidated(true)
        formStore.setResult(
            JSON.stringify({
                login: formStore.login,
                password: formStore.password,
                age: formStore.age,
                email: formStore.email,
                date: formStore.date,
            }),
        )
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
                        <Card className={'validation-form justify-content-center'}>
                            <Card.Header>Форма с валидацией полей</Card.Header>
                            <Card.Body>
                                <Form noValidate validated={formStore.validated} onSubmit={handleSubmit}>
                                    <FormControlApp
                                        label={'Логин'}
                                        value={formStore.login}
                                        onChange={formStore.setLogin.bind(formStore)}
                                        required={true}
                                        pattern={'^[A-z]+$'}
                                        patternError={'Только латинские буквы'}
                                    />
                                    <FormControlApp
                                        type={'password'}
                                        label={'Пароль'}
                                        value={formStore.password}
                                        onChange={formStore.setPassword.bind(formStore)}
                                        required={true}
                                    />
                                    <FormControlApp
                                        type={'number'}
                                        label={'Возраст'}
                                        value={formStore.age}
                                        onChange={formStore.setAge.bind(formStore)}
                                        required={true}
                                        minValue={18}
                                        maxValue={30}
                                    />
                                    <FormControlApp
                                        type={'email'}
                                        label={'E-mail'}
                                        value={formStore.email}
                                        onChange={formStore.setEmail.bind(formStore)}
                                        required={true}
                                    />
                                    <FormControlApp
                                        type={'date'}
                                        label={'Дата'}
                                        value={formStore.date}
                                        onChange={formStore.setDate.bind(formStore)}
                                        required={true}
                                    />
                                    <FormControlApp
                                        as={'textarea'}
                                        label={'Вывод'}
                                        value={formStore.result}
                                        rows={10}
                                        disabled={true}
                                    />
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <Button type={'submit'} className={'button'} variant={'primary'}>
                                    <i className={'fa fa-arrow'} />
                                    Отправить
                                </Button>
                            </Card.Footer>
                        </Card>
                    </>
                }
            />
        </Row>
    )
})
