import './SelectForm.scss'

import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormSelectApp from '../../../../core/components/FormSelectApp/FormSelectApp'
import formStore from '../../../lib/store/pages/select-form-store'

export default observer(() => {
    return (
        <Card className={'validation-form justify-content-center'}>
            <Card.Header>Форма с выпадающим полем</Card.Header>
            <Card.Body>
                <Form>
                    <FormSelectApp
                        value={formStore.selectedGroup}
                        options={formStore.groups}
                        onChange={formStore.selectGroup}
                    />
                </Form>
            </Card.Body>
        </Card>
    )
})
