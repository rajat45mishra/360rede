import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useToken from './useToken';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {token,setToken}=useToken();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;