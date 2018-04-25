import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import New from './New';
import Edit from './Edit';
import Login from './Login';
import Billing from './Billing';
import Preferences from './Preferences';
import SidebarMenu from './SidebarMenu';
import Conversations from './Conversations';
import ConversationView from './ConversationView';

import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react';

class Dashboard extends Component {
  state = { visible: false, doc_id: 'null' };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  async componentWillMount() {
    console.log(localStorage.doc_id);
    // if (localStorage.doc_id === null) {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search.slice(1));
      const id = params.get('doc_id');
      localStorage.setItem('doc_id', id);
      console.log(localStorage.doc_id);
      await this.setState({ doc_id: id });
    // }
  }

  handleLogout = (e, d) => {
    console.log(e, d);
    localStorage.setItem('doc_id', null);
    this.props.history.push('/');
  };

  render() {
    const { visible } = this.state;
    if (localStorage.doc_id === 'null') {
      // this.props.history.push('/');
      return <div />;
    } else {
      return (
        <div style={{ height: '100vh' }}>
          <Sidebar.Pushable>
            <Sidebar animation="push" vertical visible={visible} as={Menu}>
              <SidebarMenu toggle={this.toggleVisibility} />
            </Sidebar>
            <Sidebar.Pusher>
              <Menu
                secondary
                style={{
                  marginTop: '10px',
                  marginLeft: '110px',
                  marginRight: '3em',
                }}
              >
                <Menu.Item
                  name="Menu"
                  icon="list layout"
                  onClick={this.toggleVisibility}
                />
                <Menu.Item
                  name="Log out"
                  position="right"
                  onClick={(e, d) => this.handleLogout(e, d)}
                />
              </Menu>
              <Route
                exact
                path="/dashboard/conversations/new"
                component={New}
                style={{ margin: '5em' }}
              />
              {/* <Route exact path="/dashboard" component={Overview} /> */}
              <Route
                exact
                path="/dashboard/conversations"
                component={Conversations}
              />
              <Route
                exact
                path="/dashboard/conversations/edit"
                component={Edit}
              />
              <Route exact path="/dashboard/billing" component={Billing} />
              <Route
                exact
                path="/dashboard/conversation"
                component={ConversationView}
              />
              <Route
                exact
                path="/dashboard/preferences"
                component={Preferences}
              />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
  }
}

export default withRouter(Dashboard);
