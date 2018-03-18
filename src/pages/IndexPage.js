import React from 'react'
import { Redirect } from 'react-router-dom';

const IndexPage = () => (
    <div>
        <Redirect to="/login"/>
    </div>
)

export default IndexPage;
