import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Login.css';
import Lang from '../../containers/common/Lang';
import logo from '../../util/images/wisenet_logo.png'

const Login = ({onLogin, supportLanguages, currentLang, langChange}) => (
  <Lang 
    render={({lang}) => (
      <div className="login">
        <div className="login-logo">
        {/* <img src={require('../../util/images/wisenet_logo.png')} /> */}
          <img src={logo} alt={lang.logo} title={lang.logo}/> 
        </div>
        <div className="login-form">
          <form onSubmit={onLogin}>
            <Dropdown className="dropdown" options={supportLanguages} value={currentLang} onChange={langChange}/>
            <input type="text" placeholder={lang.id} title={lang.id}/>
            <input type="password" placeholder={lang.pw} title={lang.pw}/>
            <button type="submit" className="primary" title={lang.login}>{lang.login}</button>
          </form>
        </div>
      </div>
    )}
  />
);

export default Login;
