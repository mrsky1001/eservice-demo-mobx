import React from 'react'
import FormControlApp from '../../../../../core/components/FormControlApp/FormControlApp'
import tableStore from '../../../../lib/store/pages/edit-table-store'

export default (): any => {
    const loginFormatter = (cell, row) => {
        return (
            <FormControlApp
                value={cell}
                onChange={(val) => tableStore.changeUserLogin(row.id, val)}
                required={true}
                pattern={'^[A-z]+$'}
                patternError={'Только латинские буквы'}
            />
        )
    }

    return [
        {
            dataField: 'id',
            text: 'ИД',

            headerStyle: { width: '30px' },
        },
        {
            dataField: 'login',
            text: 'Логин',

            headerStyle: { width: '30px' },
            formatter: loginFormatter,
        },
        {
            dataField: 'email',
            text: 'Электронная почта',

            headerStyle: { width: '30px' },
        },
        {
            dataField: 'age',
            text: 'Возраст',

            headerStyle: { width: '30px' },
        },
        {
            dataField: 'date',
            text: 'Дата',

            headerStyle: { width: '30px' },
        },
    ]
}
