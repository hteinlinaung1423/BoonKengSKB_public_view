// JavaScript source code
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Home from './../components/home/Home';

const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Switch>
                    <Route  path="/" component={Home} exact={true} />
                    <Route  path="/Home" component={Home} exact={true} />                   
                </Switch>
            </QueryParamProvider>
        </Router>)
};
export default AppRouter;

