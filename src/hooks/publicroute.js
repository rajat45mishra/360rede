import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useToken from './useToken';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {token,setToken}=useToken();
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            token && restricted ?
                <Redirect to="/" />
            : <Component setToken={setToken} />
        )} />
    );
};

export default PublicRoute;