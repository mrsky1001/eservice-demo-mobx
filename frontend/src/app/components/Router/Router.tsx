import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

import { observer } from 'mobx-react-lite'
import routes from '../../lib/routes'
import Home from '../Home/Home'
import SimpleForm from '../pages/SimpleForm/SimpleForm'

const Router = observer(() => {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.SIMPLE_FORM} component={SimpleForm} />
                <Redirect from="*" to={routes.HOME} />
            </Switch>
        </HashRouter>
    )
})

export default Router
