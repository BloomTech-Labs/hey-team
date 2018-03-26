//Alex Cassell
//http://alexcassell.com

import React, { Component } from 'react';
import {Billing, Preferences, SignIn } from './components';
import ConversationsIndex from './components/Interior/Conversations/index.js';
import LandingPageIndex from './components/LandingPage/index.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ LandingPageIndex }/>
          <Route path="/welcome" component={ SignIn }/>

          <Route exact path="/billing" component={ Billing }/>
          <Route path="/conversations" component={ ConversationsIndex }/>
          <Route path="/preferences" component={ Preferences }/>

        </div>
      </Router>
    );
  }
}
export default App;