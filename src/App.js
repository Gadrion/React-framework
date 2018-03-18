import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/login/LoginContainer';
import UsergroupContainer from './containers/setup/usergroup/UsergroupContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer/>
        <UsergroupContainer/>
      </div>
    );
  }
}

export default App;
