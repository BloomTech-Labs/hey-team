import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   loginAction,
//   AUTHENTICATED,
//   AUTHENTICATION_ERROR,
// } from '../actions/AuthActions';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label,
  Menu,
} from 'semantic-ui-react';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
    // this.handleUsernameValue = this.handleUsernameValue.bind(this);
  }

  render() {
    return (
      <div className="login-form">
        <Menu
          secondary
          style={{
            marginTop: '10px',
            marginLeft: '3em',
            marginRight: '3em',
          }}
        >
          {/* <Menu.Item>
            <a href="https://slack.com/oauth/authorize?client_id=270618182930.333388702161&scope=bot,incoming-webhook,search:read&redirect_uri=https://035404a8.ngrok.io/auth/bot">
              <img
                alt="Add to Slack"
                height="40"
                width="139"
                src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              />
            </a>
          </Menu.Item> */}
          <Menu.Item position="right">
            <a href="https://slack.com/oauth/authorize?scope=users:read,users:read.email,team:read&client_id=270618182930.333388702161&redirect_uri=https://035404a8.ngrok.io/auth/login">
              <img src="https://api.slack.com/img/sign_in_with_slack.png" />
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // user: state.user,
  };
};

export default connect(mapStateToProps, {})(Login);
