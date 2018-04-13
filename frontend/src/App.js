import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import New from './components/New';

class App extends Component {
  state = { visible: false };

  render() {
    return (
      <div>
        <h1>hi</h1>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/conversations/new" component={New} />
        {/* <Route exact path="/dashboard/overview" component={Overview} />
        <Route
          exact
          path="/dashboard/conversations"
          component={Conversations}
        />
        <Route exact path="/dashboard/conversations/list" component={List} />
        <Route exact path="/dashboard/conversations/edit" component={Edit} /> */}
      </div>
    );
  }
}

export default App;
