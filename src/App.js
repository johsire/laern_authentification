import React, { Component } from 'react';
import './App.css';

class App extends Component {

  login(){
    let { 
      REACT_APP_DOMAIN, 
      REACT_APP_CLIENT_ID 
    } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  };

  render() {
    return (
      <div className="App">
        <h1>Auth Mini</h1>
        <button onClick={this.login}>Click me to Login</button>
      </div>
    );
  }
};

export default App;
