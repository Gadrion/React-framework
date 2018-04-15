import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={(props) =>
        sessionStorage.getItem('userid') !== null && (typeof sessionStorage.getItem('userid') !== 'undefined')   
            ? <Component {...props} />
            : <Redirect to="/login" />}
    />
);
  
export default PrivateRoute;