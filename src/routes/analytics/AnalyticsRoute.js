import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import AnalyticsMenuBar from '../../components/common/AnalyticsMenuBar';
import CountingContainer from '../../containers/analytics/counting/CountingContainer';
import HeatmapContainer from '../../containers/analytics/heatmap/HeatmapContainer';
import QueueContainer from '../../containers/analytics/queue/QueueContainer';

class AnalyticsRoute extends Component {
        render() {
            console.log(this.props);
            const { match, history } = this.props;
            const isAnalyticsURL = ((history.location.pathname === '/analytics' || history.location.pathname === '/analytics/') ) ? true : false;
            return (
                <React.Fragment>
                    { isAnalyticsURL && <Redirect to="/analytics/counting"/> }
                    <nav className="menuBar">
                        <AnalyticsMenuBar match={match} />
                    </nav>
                    <div className="content-isMenu">
                    <Switch>
                        <Route exact path={`${match.url}/counting`} component={CountingContainer} />
                        <Route path={`${match.url}/queue`} component={QueueContainer} />
                        <Route path={`${match.url}/heatmap`} component={HeatmapContainer} />
                    </Switch>
                    </div>
                </React.Fragment>
            );
        }
    }

export default AnalyticsRoute;
