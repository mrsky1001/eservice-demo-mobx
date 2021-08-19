import './SelectForm.scss'

import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { observer } from 'mobx-react-lite'
import FormSelectApp from '../../../../core/components/FormSelectApp/FormSelectApp'
import formStore from '../../../lib/store/pages/select-form-store'
import groups from '../../../../../test-data/groups'
import { Col, NavLink, Row } from 'react-bootstrap'
import ColApp from '../../../../core/components/ColApp/ColApp'
import pagesStore from '../../../lib/store/pages-store'
import FormControlApp from '../../../../core/components/FormControlApp/FormControlApp'
import routes from '../../../lib/routes'

export default observer(() => {
    const currentPageRowNum = 1
    const currentPageColNum = 0
    const prevLastColumn = pagesStore.examplesRows[currentPageRowNum - 1].columns.length - 1
    const prevPage = pagesStore.examplesRows[currentPageRowNum - 1].columns[prevLastColumn]
    // const nextPage = pagesStore.examplesRows[currentPageRowNum].columns[currentPageColNum + 1]
    const nextPage = { route: routes.HOME, title: 'Главная' }

    useEffect(() => {
        formStore.init(groups)
    }, [])

    return (
        <Row>
            <Col lg={3} md={0} />
            <ColApp
                lg={5}
                md={12}
                body={
                    <>
                        <Row>
                            <Col>
                                <NavLink href={prevPage.route}>{`<< ${prevPage.title}`}</NavLink>
                            </Col>
                            <Col>
                                <NavLink href={nextPage.route} className={'pull-right'}>
                                    {`${nextPage.title} >>`}
                                </NavLink>
                            </Col>
                        </Row>

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
                    </>
                }
            />
        </Row>
    )
})
