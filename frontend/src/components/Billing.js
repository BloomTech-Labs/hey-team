import { Container, Button, Header, Icon } from 'semantic-ui-react';

import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { hasActiveSubscription } from '../actions/billing';

const w_id = localStorage.getItem('doc_id');

const URL = 'https://035404a8.ngrok.io';

class Billing extends Component {
  constructor() {
    super();
    this.state = {
      w_id: '',
      active: false,
    };
  }
  onToken = token => {
    axios.post(`${URL}/stripe`, { w_id, token }).then(res => {
      alert('Payment Successful');
    });
  };

  componentWillMount() {
    this.setState({ w_id: localStorage.getItem('doc_id') });
    if (hasActiveSubscription(w_id)) {
      this.setState({ active: true });
    }
  }

  render() {
    if (this.state.active) {
      return (
        <Container>
          <Header as="h2" icon textAlign="center">
            <Icon name="checkmark" circular color="green" />
            <Header.Content>
              Looks like your Subscription is still active!!
            </Header.Content>
          </Header>
        </Container>
      );
    } else {
      return (
        <Container>
          <StripeCheckout
            name="Hey Team"
            description="30 Day Subscription - $9.99"
            amount={999}
            token={this.onToken}
            stripeKey="pk_test_mSszCkbADb0iAmuW6u0dWhcw"
          >
            {' '}
            <Header as="h2" icon textAlign="center">
              <Icon name="close" circular color="red" />
              <Header.Content>
                Looks like your Subscription as run out
              </Header.Content>
              <Header.Content>Click here to re-activate!!</Header.Content>
              <Header.Content>
                <Button color="green"> Activate </Button>
              </Header.Content>
            </Header>
          </StripeCheckout>
        </Container>
      );
    }
  }
}

export default Billing;
