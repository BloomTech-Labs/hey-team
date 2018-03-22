import React, { Component } from 'react';
//import InsideNavigation from './components/InsideNavigation';
import { LandingPage, Conversations, Billing, Preferences, SignIn } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <InsideNavigation /> */}
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/billing" component={ Billing }/>
          <Route path="/conversations" component={ Conversations }/>
          <Route path="/preferences" component={ Preferences }/>
          {/*^^^^^ this navigation menu will be used once people have signed in */}

          <Route path="/welcome" component={ SignIn }/>
        </div>
      </Router>
    );
  }
}
export default App;