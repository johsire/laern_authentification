import React, { Component } from 'react';
import './App.css';

class App extends Component {

  login(){
    let { 
      REACT_APP_DOMAIN, 
      REACT_APP_CLIENT_ID 
    } = process.env;
  };


  render() {
    return (
      <div className="App">
        <h1>Auth Mini</h1>
        <button onClick={this.login}>Click me to Login</button>
      </div>
    );
  }
}

export default App;
