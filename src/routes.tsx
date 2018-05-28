import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import History from './modules/history';

import Home from './containers/home';

const Routes = () => (
    <Router history={History}>
        <Switch>
            <Route path="*" component={Home} />
        </Switch>
    </Router>
);

export default Routes;
