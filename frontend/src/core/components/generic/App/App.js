import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css" //eslint-disable-line
import "font-awesome/css/font-awesome.min.css" //eslint-disable-line
import "react-toastify/dist/ReactToastify.css"

import React from 'react'
import Container from "react-bootstrap/Container";
import Router from "../../../../app/components/Router/Router";
import { ToastContainer } from "react-toastify";
import { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru"
import HeaderApp from "../HeaderApp/index";
import { Provider } from "mobx-react";
import { configure } from "mobx";

import modalStore from "../../../store/modalStore";
import toasterStore from "../../../store/toasterStore";

/**
 * App
 * Main component of app.
 * Dont change this file!!!
 */
configure({ enforceActions: "always" });

const stores = { modalStore, toasterStore };

const App = () => {
    registerLocale("ru", ru)

    return (
        <Provider {...stores}>
            <div className={"app"}>
                <HeaderApp/>
                <Container className={"mt-5"}>
                    <Router/>
                </Container>
                <ToastContainer {...toasterStore.optionsToaster} />
            </div>
        </Provider>
    )
}

export default App

// serviceWorker.unregister();