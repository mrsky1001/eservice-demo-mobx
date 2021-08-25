/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import React from 'react'
import TemplateCode from '../../../TemplateCode/TemplateCode'

const Code = (): JSX.Element => (
    <TemplateCode
        title={'SelectForm.tsx'}
        code={`
useEffect(() => {
    formStore.init(groups)
}, [])
    
<Card className={'validation-form justify-content-center'}>
    <Card.Header>Форма с выпадающим полем</Card.Header>
    <Card.Body>
        {formStore.loading ? null : (
            <Form>
                <FormSelectApp
                    label={'Выберите группу'}
                    value={formStore.selectedGroup.toSelectOption('name')}
                    options={formStore.groups.map((g) => g.toSelectOption('name'))}
                    onChange={formStore.selectGroup.bind(formStore)}
                />
                <FormControlApp
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
                        `}
    />
)
export default Code
