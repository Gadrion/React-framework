import React from 'react'
import { Redirect } from 'react-router-dom';

const IndexRoute = () => (
    <React.Fragment>
        <Redirect to="/login"/>
    </React.Fragment>
)

export default IndexRoute;
