import {
  Container,
  Button,
  Header,
  Icon,
  Checkbox,
  Message,
} from 'semantic-ui-react';

import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { hasActiveSubscription } from '../actions/billing';

const w_id = '5add171bf82fa1509c5407d9';

class Billing extends Component {
  constructor() {
    super();
    this.state = {
      w_id: '',
      active: false,
    };
  }

  render() {
    return (
      <Container>
        <Message info>
          <Message.Header>Subscribe to email updates</Message.Header>
        </Message>

        <Checkbox toggle />
      </Container>
    );
  }
}

export default Billing;
