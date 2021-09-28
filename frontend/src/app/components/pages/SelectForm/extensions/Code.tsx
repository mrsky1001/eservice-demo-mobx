/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React from 'react'
import CodeTemplate from '../../../templates/CodeTemplate/CodeTemplate'

const Code = (): JSX.Element => (
    <CodeTemplate
        title={'SelectForm.tsx'}
        code={`
export default observer(() => {
    useEffect(() => {
        formStore.init(groups)
    }, [])

    return (
        <>
            <PageTemplate
                currentPage={1}
                component={
                    <Card className={'validation-form justify-content-center'}>
                        <Card.Header>Форма с выпадающим полем</Card.Header>
                        <Card.Body>
                            {formStore.loading ? null : (
                                <Form>
                                    <FormControlApp
                                        id={'group'}
                                        label={'Выберите группу'}
                                        as={'select'}
                                        value={formStore.selectedGroup.toSelectOption('name')}
                                        selectProps={{
                                            valueField: 'name',
                                            textField: 'name',
                                            options:  formStore.groups
                                        }}
                                        onChange={formStore.selectGroup.bind(formStore)}
                                    />
                                    <FormControlApp
                                        id={'output'}
                                        as={'textarea'}
                                        label={'Вывод'}
                                        value={formStore.selectedGroup.getStudentsText()}
                                        disabled={true}
                                        rows={10}
                                    />
                                </Form>
                            )}
                        </Card.Body>
                    </Card>
                }
            />
            <Code />
        </>
    )
})
`}
    />
)
export default Code
