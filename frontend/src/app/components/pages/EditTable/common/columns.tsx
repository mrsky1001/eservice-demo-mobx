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
                autoFocus={true}
                pattern={'^[A-z]+$'}
                patternError={'Только латинские буквы'}
            />
        )
    }

    return [
        {
            dataField: 'id',
            text: 'ИД',
        },
        {
            dataField: 'login',
            text: 'Логин',

            formatter: loginFormatter,
        },
        {
            dataField: 'email',
            text: 'Электронная почта',
        },
        {
            dataField: 'age',
            text: 'Возраст',
        },
        {
            dataField: 'date',
            text: 'Дата',
        },
    ]
}
