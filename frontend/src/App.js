//Alex Cassell
//http://alexcassell.com

import React, { Component } from 'react';
import {Billing, Preferences, SignIn } from './components';
import ConversationsIndex from './components/Interior/Conversations/index.js';
import PreferencesIndex from './components/Interior/Preferences/index.js';
import BillingIndex from './components/Interior/Billing/index.js';
import LandingPageIndex from './components/LandingPage/index.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ LandingPageIndex }/>
          <Route path="/welcome" component={ SignIn }/>

          <Route exact path="/billing" component={ BillingIndex }/>
          <Route path="/conversations" component={ ConversationsIndex }/>
          <Route path="/preferences" component={ PreferencesIndex }/>

        </div>
      </Router>
    );
  }
}
export default App;