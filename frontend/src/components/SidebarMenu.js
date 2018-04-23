import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

class SidebarMenu extends Component {
  handleRoteConversations = () => {
    this.props.history.push('/dashboard/conversations');
  };

  handleRouteBilling = () => {
    this.props.history.push('/dashboard/billing');
  };

  handleRoutePreferences = () => {
    this.props.history.push('/dashboard/preferences');
  };

  render() {
    return (
      <div>
        <Menu.Item name="conversations" onClick={this.handleRoteConversations}>
          <Icon name="comments" />
          Conversations
        </Menu.Item>
        <Menu.Item name="billing" onClick={this.handleRouteBilling}>
          <Icon name="money" />
          Billing
        </Menu.Item>
        <Menu.Item name="preferences" onClick={this.handleRoutePreferences}>
          <Icon name="setting" />
          Preferences
        </Menu.Item>
      </div>
    );
  }
}

export default withRouter(SidebarMenu);
