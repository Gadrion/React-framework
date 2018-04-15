import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../util/images/wisenet_logo.svg';
import smLogo from '../../util/images/wisenet_logo_sm.svg';
import LogoutContainer from '../../containers/login/LogoutContainer';
import Lang from '../../containers/common/Lang';

const NavigationBar = _ => (
  <Lang 
    render={({lang}) => (
      <div className="navigation-bar">
        <div className="logo">
          <NavLink to="/dashboard" >
            <img className="logo-lg" src={logo}/>
            <img className="logo-sm" src={smLogo}/>
          </NavLink>
        </div>
        <div className="menu">
          <NavLink to="/dashboard" >{lang.dashboard}</NavLink>
          <NavLink to="/store" >{lang.store}</NavLink>
          <NavLink to="/analytics" >{lang.analytics}</NavLink>
          <NavLink to="/setup" >{lang.setup}</NavLink>
        </div>
        <LogoutContainer />
    </div>
    )}
  />
);

export default NavigationBar;