import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { Store } from './src/store/index';

import MainViewComponent from './src/templates/main-view/main-view.container';

import './src/styles/defaults.scss';

ReactDOM.render(
    <Provider
        store={ Store }
    >
        <MainViewComponent />
    </Provider>,
    document.getElementById('root')
);
