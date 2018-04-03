//Alex Cassell
//http://alexcassell.com

import React, { Component } from 'react';
import { SignIn } from './components';

import NavigationHeader from './components/Interior/Navigation/NavigationHeader'

import ConversationsIndex from './components/Interior/Conversations/index.js';
import PreferencesIndex from './components/Interior/Preferences/index.js';
import BillingIndex from './components/Interior/Billing/index.js';

import New from './components/Interior/Conversations/NewConversation/index.js'

import LandingPageIndex from './components/LandingPage/index.js';

import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationHeader />
          {/* above will only be shown if logged in and 
          landing page will not be shown if logged in */}
          <Route exact path="/" component={ LandingPageIndex }/>
          {/* above automatically take you to conversations page when logged in */}

          <Route path="/welcome" component={ SignIn }/>

          <Route path="/billing" component={ BillingIndex }/>
          <Route exact path="/conversations" component={ ConversationsIndex }/>
          <Route path="/preferences" component={ PreferencesIndex }/>

          <Route path="/conversations/new" component={ New }/>

        </div>
      </Router>
    );
  }
}
export default App;