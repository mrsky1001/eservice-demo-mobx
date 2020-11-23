import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css" //eslint-disable-line
import "font-awesome/css/font-awesome.min.css" //eslint-disable-line
import "react-toastify/dist/ReactToastify.css"

import React from 'react'
import HeaderApp from "../HeaderApp/HeaderApp";
import Container from "react-bootstrap/Container";
import Router from "../../../../app/components/Router/Router";
import { ToastContainer } from "react-toastify";
import { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru" // the locale you want


/**
 * App
 * Main component of app.
 * Dont change this file!!!
 */

const App = () => {
    registerLocale("ru", ru)

    const optionsToaster = {
        autoClose: 8000,
        toastClassName: "toast-style",
    }

    return (
        <div className={"app"}>
            {/*<DevTools/>*/}
            <HeaderApp />
            <Container className={"mt-5"}>
                <Router />
            </Container>
            <ToastContainer {...optionsToaster} />
        </div>
    )
}

export default App

// serviceWorker.unregister();