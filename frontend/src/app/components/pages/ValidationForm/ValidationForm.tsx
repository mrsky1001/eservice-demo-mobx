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

export default observer(() => {
    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
        const form = e.currentTarget

        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }

        formStore.setValidated(true)
        formStore.setResult(
            JSON.stringify({
                login: login,
                password: password,
                age: age,
                email: email,
                date: date,
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
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <FormControlApp
                                        label={'Логин'}
                                        value={login}
                                        onChange={setLogin}
                                        isRequired={true}
                                        pattern={'^[A-z]+$'}
                                        patternError={'Только латинские буквы'}
                                    />
                                    <FormControlApp
                                        type={'password'}
                                        label={'Пароль'}
                                        value={password}
                                        onChange={setPassword}
                                        isRequired={true}
                                    />
                                    <FormControlApp
                                        type={'number'}
                                        label={'Возраст'}
                                        value={age}
                                        onChange={setAge}
                                        isRequired={true}
                                        minValue={18}
                                        maxValue={30}
                                    />
                                    <FormControlApp
                                        type={'email'}
                                        label={'E-mail'}
                                        value={email}
                                        onChange={setEmail}
                                        isRequired={true}
                                    />
                                    <FormControlApp
                                        type={'date'}
                                        label={'Дата'}
                                        value={date}
                                        onChange={setDate}
                                        isRequired={true}
                                    />
                                    <FormControlApp
                                        as={'textarea'}
                                        label={'Вывод'}
                                        value={result}
                                        countRows={10}
                                        isDisabled={true}
                                    />
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <Button type={'submit'} className={'button'} variant={'primary'}>
                                    <i className={icons.ARROW} />
                                    Результат
                                </Button>
                            </Card.Footer>
                        </Card>
                    </>
                }
            />
        </Row>
    )
})
