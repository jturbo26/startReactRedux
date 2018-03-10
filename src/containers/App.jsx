import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the app!!!!</h1>
        <Link to="/login">Login</Link>
        <Login />
      </div>
    );
  }
}

export default App;
