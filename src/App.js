import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/LoginPage';
import SetupPage from './pages/setup/SetupPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={IndexPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/setup" component={SetupPage}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
