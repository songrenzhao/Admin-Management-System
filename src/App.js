import React, { Component } from 'react';
import Login from './userAuth/login.jsx'
import Dashboard from './Dashboard/dashboard.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "MainDiv">
        {/* <Login /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
