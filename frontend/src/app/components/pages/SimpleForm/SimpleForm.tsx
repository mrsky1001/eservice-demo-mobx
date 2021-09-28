/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './SimpleForm.scss'

import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Code from './extensions/Code'
import { observer } from 'mobx-react-lite'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import formStore from '../../../lib/store/pages/simple-form-store'
import { PageTemplate } from '../../templates/PageTemplate/PageTemplate'

export default observer(() => {
    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): React.MouseEvent<HTMLElement> => {
        formStore.handlerSubmit()
        e.preventDefault()
        return e
    }

    return (
        <>
            <PageTemplate
                currentPage={0}
                component={
                    <>
                        <Card className={'simple-form justify-content-center'}>
                            <Card.Header>Проста форма</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label>{'Введите "Имя пользователя" и посмотрите результат!'}</Form.Label>
                                    <FormControlApp
                                        id={'username'}
                                        label={'Имя пользователь'}
                                        value={formStore.userName}
                                        onChange={formStore.setUserName.bind(formStore)}
                                    />
                                    <FormControlApp
                                        id={'output'}
                                        as={'textarea'}
                                        label={'Вывод'}
                                        value={formStore.info}
                                        disabled={true}
                                        onChange={formStore.setInfo.bind(formStore)}
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
            <Code />
        </>
    )
})
