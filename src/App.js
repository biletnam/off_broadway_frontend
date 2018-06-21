import React, { Component } from 'react';
import './App.css';
import LoginPage from './Containers/LoginPage'
import MainPage from './Containers/MainPage'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    loggedIn: false,
    userExists: false,
    userId: 2
  }

  userExistsCheck = () => {
    this.setState({
      userExists: !this.state.userExists
    });
  };

  logIn = (e) => {
    e.preventDefault();
    // this.history.go('/about')
    // console.log(window.history.state.);
    window.history.pushState({}, "new state", "home");
    // withRouter(window.history.pushState({}, "new state", "home"))
    // window.history.go();
    this.setState({
      loggedIn: true
    });
  }

  loggedInPage = () => {
    return <MainPage userId={this.state.userId} />
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/home" render={this.loggedInPage} />
          <Route exact path="/new-production" render={this.loggedInPage} />
          <Route exact path="/my-productions" render={this.loggedInPage} />
          <Route exact path="/all-productions" render={this.loggedInPage} />
          {this.state.loggedIn ? <MainPage userId={this.state.userId} /> : <LoginPage logIn={this.logIn} userExistsState={this.state.userExists} userExistsCheck={this.userExistsCheck} />}
        </div>
      </Router>
    );
  }
}

export default App;
