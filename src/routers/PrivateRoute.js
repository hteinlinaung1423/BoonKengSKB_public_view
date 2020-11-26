import React, { useEffect, useContext } from "react";
import { Route, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {

    const history = useHistory();

    useEffect(() => {
        const fn = async () => {
            if (sessionStorage.getItem("jwt") ? false : true) {
                history.push("/Login")
            }
        };
        fn();
    }, []);

    const render = props =>
        sessionStorage.getItem("jwt") ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
};



export default withRouter(PrivateRoute);