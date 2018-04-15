import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import IndexRoute from '../routes/common/IndexRoute';
import LoginContainer from './login/LoginContainer';
import BaseRoute from '../routes/BaseRoute';
import history from '../routes/common/history'
import PrivateRoute from '../routes/common/PrivateRoute';
import axiox from 'axios';

class App extends Component {
  componentWillMount(){
    const haveSession = sessionStorage.getItem('token');
    if(haveSession)
      axiox.defaults.headers = {
        ...axiox.defaults.headers,
        'x-access-token': haveSession
      }
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={IndexRoute} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/dashboard" component={BaseRoute} />
            <PrivateRoute path="/store" component={BaseRoute} />
            <PrivateRoute path="/analytics" component={BaseRoute} />
            <PrivateRoute path="/setup" component={BaseRoute} />
            <Route render={()=>(<h1>?!!!! 왜옴</h1>)}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;