import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// import New from './components/New';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import SidebarMenu from './components/SidebarMenu';

import LandingPage from './components/LandingPage';

// import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react';

class App extends Component {
  // state = { visible: false };

  // toggleVisibility = () => {
  //   this.setState({ visible: !this.state.visible });
  // };

  render() {
    // const { visible } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        < LandingPage />
      </div>
    );
  }
}

export default App;
