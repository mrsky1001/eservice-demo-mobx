/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React from 'react'
import Card from 'react-bootstrap/Card'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light'
import { docco } from 'react-syntax-highlighter/dist/esm/async-languages/hljs'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const Code = (): JSX.Element => (
    <Card className={'simple-form justify-content-center'}>
        <Card.Header>Код компонента SimpleForm.tsx</Card.Header>
        <Card.Body>
            <SyntaxHighlighter language="jsx" style={jsx}>
                {`
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
</Card>`}
            </SyntaxHighlighter>
        </Card.Body>
        <Card.Footer></Card.Footer>
    </Card>
)

export default Code
