import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { LandingPage, Conversations, Billing, Preferences } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/billing" component={ Billing }/>
          <Route path="/conversations" component={ Conversations }/>
          <Route path="/preferences" component={ Preferences }/>
        </div>
      </Router>
    );
  }
}
export default App;