import { HashRouter, Redirect, Route, Switch } from "react-router-dom"

import React from "react"
import FormDemo from "../FormDemo/FormDemo";

/**
 * Router
 * This is Router for your app;
 * You need add/change routes and theirs components.
 * Dont forget after add/change route here, change into api/routes.
 */

const Router = () => {
    return (
        <div>
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/" component={FormDemo}/>
                    {/* Order of routes important!*/}
                    {/* Your code here...*/}
                    <Route path="/formDemo/" component={FormDemo}/>
                    {/*Order of routes important!*/}
                    <Route component={FormDemo}/>
                    <Redirect to="/" component={FormDemo}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Router
