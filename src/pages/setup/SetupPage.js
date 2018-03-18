import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UsergroupPage from './usergroup/UsergroupPage';
import LoginPage from "../login/LoginPage";

class SetupPage extends Component {
    render() {
        const { match } = this.props;
        const isSetupURL = (match.url == '/setup') ? true : false;

        return (
            <div>
                {/* { isSetupURL && <Redirect to="/setup/usergroup"/> } */}
                <div>
                    TEST!!!
                </div>
                <Switch>
                    <Route path="/setup/usergroup" component={UsergroupPage}/>
                    <Route path="/setup/usergroup2" component={LoginPage}/>
                </Switch>
            </div>
        );
    }
};

export default SetupPage;
