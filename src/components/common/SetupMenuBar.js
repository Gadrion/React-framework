import React from 'react';
import { NavLink } from 'react-router-dom';
import IconBack from 'react-icons/lib/fa/backward';
import IconUserGroup from 'react-icons/lib/fa/group';
import IconSite from 'react-icons/lib/fa/sitemap';
import Lang from '../../containers/common/Lang';

const SetupMenuBar = ({match}) => (
    <Lang 
      render={({lang}) => (
        <div className="menu-bar">
            <ul>
                <li><NavLink to={`${match.url}/usergroup`}><IconUserGroup />{lang.user}</NavLink></li>
                <li><NavLink to={`${match.url}/site`}><IconSite />{lang.site}</NavLink></li>
            </ul>
        </div>
      )}
    />
);

export default SetupMenuBar;