import 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-line
import 'font-awesome/css/font-awesome.min.css'; // eslint-disable-line
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import ru from 'date-fns/locale/ru';
import {configure} from 'mobx';
import {inject, observer, Provider} from 'mobx-react';
import React, {ReactComponentElement, ReactElement} from 'react';
import Container from 'react-bootstrap/Container';
import {registerLocale} from 'react-datepicker';
import {ToastContainer} from 'react-toastify';
import modalStore from '../../../store/modalStore';
import toasterStore from '../../../store/toasterStore';

/**
 * App
 * Main component of app.
 * Dont change this file!!!
 */
configure({enforceActions: 'always'});

const App = (): ReactElement => {
    const stores = {modalStore, toasterStore};

    registerLocale('ru', ru);

    return (
        <Provider {...stores}>
            <div className={'app'}>
                <Container className={'mt-5'}>
                </Container>
                <ToastContainer {...toasterStore.optionsToaster} />
            </div>
        </Provider>
    );
};

export default App;

// serviceWorker.unregister();
