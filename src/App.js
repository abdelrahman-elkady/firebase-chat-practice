import React, { Component } from 'react';
import './App.css';

import Messenger from './components/Messenger';
import Auth from './components/Auth';

import config from './config';

import _ from 'lodash';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: undefined
    }

    this.updateUser = this.updateUser.bind(this);

  }

  componentDidMount() {
    firebase.initializeApp(config.firebase);
  }

  updateUser(user) {
    this.setState({user});
  }

  isAuthenticated() {
    return !_.isNil(this.state.user);
  }

  render() {
    if (this.isAuthenticated()) {
        return <Messenger />;
    }

    return <Auth updateUser={this.updateUser} />;
  }
}

export default App;
