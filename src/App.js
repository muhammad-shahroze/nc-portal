import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header'
import UsersList from './components/UsersList';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path='/' />
          <UsersList path='/users' />
        </Router>
      </div>
    );
  }
}

export default App;
