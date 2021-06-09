// JavaScript source code
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Home from './../components/home/Home';
import Profile from './../components/profile/profile';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import Landing from './../components/game/Landing';
import PrivateRoute from './PrivateRoute';
import TabPanel from './../components/shared/TabPanel';


const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Switch>
                    <Route path="/" component={Landing} exact={true} />
                    <Route path="/Login" component={Login} exact={true} />
                    <Route path="/Register" component={Register} exact={true} />
                </Switch>

            </QueryParamProvider>
        </Router>)
};
export default AppRouter;

//<PrivateRoute path="/Profile" children={<TabPanel />} exact={true} />
//<PrivateRoute path="/Home" children={<TabPanel />} exact={true} />
//<Switch>
//    <PrivateRoute path="/Home" children={<Home />} exact={true} />
//    <PrivateRoute path="/Profile" children={<Profile />} exact={true} />
//</Switch>

