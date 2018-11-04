import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoLayoutContainer from './containers/video/VideoLayoutContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoLayoutContainer />
      </div>
    );
  }
}

export default App;
