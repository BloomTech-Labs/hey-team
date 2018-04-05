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
  constructor(props) {
    super(props);
    this.state = {loggedIn: true};
    }
  render() {
        // <NavigationHeader {...this.state} />
        const loggedIn = this.state.loggedIn;
    
        const navigation = loggedIn ? (
          <div>
              <Route path="/welcome" component={ SignIn }/>
              <Route path="/billing" component={ BillingIndex }/>
              <Route exact path="/conversations" component={ ConversationsIndex }/>
              <Route path="/preferences" component={ PreferencesIndex }/>
              <Route path="/conversations/new" component={ New }/>
              <NavigationHeader />
          </div>
        ) : (
          <div>
            <Route path="/welcome" component={ SignIn }/>
            <Route path="/billing" component={ LandingPageIndex }/>
            <Route exact path="/conversations" component={ LandingPageIndex }/>
            <Route path="/preferences" component={ LandingPageIndex }/>
            <Route path="/conversations/new" component={ LandingPageIndex }/>
          </div>
        );
    return (
      <Router>
        <div>
          {/* above will only be shown if logged in and 
          landing page will not be shown if logged in */}
          <Route exact path="/" component={ LandingPageIndex }/>
          {navigation}



        </div>
      </Router>
    );
  }
}
export default App;