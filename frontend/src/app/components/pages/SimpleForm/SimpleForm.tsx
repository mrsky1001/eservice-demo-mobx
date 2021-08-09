import './SimpleForm.scss'

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import formStore from '../../../lib/store/pages/simple-form-store'

export default observer(() => {
    return (
        <Card className={'simple-form justify-content-center'}>
            <Card.Header>Проста форма</Card.Header>
            <Card.Body>
                <Form>
                    <FormControlApp
                        label={'Пользователь'}
                        onChange={formStore.changeUserName}
                        value={formStore.userName}
                    />
                    <FormControlApp
                        label={'Вывод'}
                        onChange={formStore.changeInfo}
                        value={formStore.info}
                        isDisabled={true}
                    />
                </Form>
            </Card.Body>
            <Card.Footer>
                <Button onClick={formStore.handlerSubmit} className={'button'} variant={'primary'}>
                    <i className={'fa fa-arrow'} />
                    Результат
                </Button>
            </Card.Footer>
        </Card>
    )
})
