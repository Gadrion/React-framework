import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../components/common/NavigationBar';
import DashboardRoute from './dashboard/DashboardRoute';
import SetupRoute from './setup/SetupRoute';
import StoreRoute from './store/StoreRoute';
import AnalyticsRoute from './analytics/AnalyticsRoute';

class BaseRoute extends Component {
    render() {
        return (
            <div className="baseRoute">
                <NavigationBar/>
                <Switch>
                    <Route path="/dashboard" component={DashboardRoute} />
                    <Route path="/store" component={StoreRoute} />
                    <Route path="/analytics" component={AnalyticsRoute} />
                    <Route path="/setup" component={SetupRoute} />
                </Switch>
            </div>
        );
    }
};

export default BaseRoute;
