/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React from 'react'
import TemplateCode from '../../../TemplateCode/TemplateCode'

const Code = (): JSX.Element => (
    <TemplateCode
        title={'SimpleForm.tsx'}
        code={`
<Card className={'simple-form justify-content-center'}>
    <Card.Header>Проста форма</Card.Header>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Label>{'Введите "Имя пользователя" и посмотрите результат!'}</Form.Label>
            <FormControlApp
                label={'Имя пользователь'}
                value={formStore.userName}
                onChange={formStore.setUserName.bind(formStore)}
            />
            <FormControlApp
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
                        `}
    />
)
export default Code
