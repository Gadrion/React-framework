import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import SetupMenuBar from '../../components/common/SetupMenuBar';
import SiteContainer from '../../containers/setup/site/SiteContainer';
import UsergroupContainer from '../../containers/setup/usergroup/UsergroupContainer';

class SetupRoute extends Component {
    render() {
        console.log(this.props);
        const { match, history } = this.props;
        const isSetupURL = ((history.location.pathname === '/setup' || history.location.pathname === '/setup/') ) ? true : false;
        return (
            <React.Fragment>
                { isSetupURL && <Redirect to="/setup/usergroup"/> }
                <nav className="menuBar">
                    <SetupMenuBar match={match} />
                </nav>
                <div className="content-isMenu">
                <Switch>
                    <Route exact path={`${match.url}/usergroup`} component={UsergroupContainer} />
                    <Route path={`${match.url}/site`} component={SiteContainer} />
                </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default SetupRoute;