import * as React from 'react';
import { Route, Router, Switch } from 'react-router';

import history from './modules/history';
import Home from './containers/home';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="*" component={Home} />
        </Switch>
    </Router>
);

export default Routes;
