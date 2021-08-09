import './SelectForm.scss'

import React, { useEffect, useReducer, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormSelectApp from '../../../../core/components/FormSelectApp/FormSelectApp'

export default observer(() => {
    return (
        <Card className={'validation-form justify-content-center'}>
            <Card.Header>Форма с выпадающим полем</Card.Header>
            <Card.Body>
                <Form>
                    <FormSelectApp value={selectedGroup} options={groupFactory.options()} onChange={setSelectedGroup} />
                </Form>
            </Card.Body>
        </Card>
    )
})
