/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

import './SelectForm.scss'

import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormSelectApp from '../../../../core/components/FormSelectApp/FormSelectApp'
import formStore from '../../../lib/store/pages/select-form-store'
import groups from '../../../../../test-data/groups'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import { TemplatePage } from '../../TemplatePage/TemplatePage'
import Code from './extensions/Code'

export default observer(() => {
    useEffect(() => {
        formStore.init(groups)
    }, [])

    return (
        <>
            <TemplatePage
                currentPage={1}
                component={
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
                }
            />
            <Code />
        </>
    )
})
