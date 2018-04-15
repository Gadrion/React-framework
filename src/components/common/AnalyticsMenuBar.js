import React from 'react';
import { NavLink } from 'react-router-dom';
import Lang from '../../containers/common/Lang';

const AnalyticsMenuBar = ({match}) => (
    <Lang 
      render={({lang}) => (
        <div className="menu-bar">
            <ul>
                <li><NavLink to={`${match.url}/counting`}><i className="fa fa-users"></i> {lang.counting}</NavLink></li>
                <li><NavLink to={`${match.url}/queue`}><i className="fa fa-qq"></i> {lang.queue}</NavLink></li>
                <li><NavLink to={`${match.url}/heatmap`}><i className="fa fa-map"></i> {lang.heatmap}</NavLink></li>
            </ul>
        </div>
      )}
    />
);

export default AnalyticsMenuBar;