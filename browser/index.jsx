'use strict';

import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Example from './example/container';

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ Example }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);