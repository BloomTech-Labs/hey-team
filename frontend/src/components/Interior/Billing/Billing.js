import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Checkbox } from 'react-mdl';
import axios from 'axios';
import { ServerResponse } from 'http';
// const w_id = localStorage.doc_id;
const w_id = '5ad4cebecb2cb341f09211ee';

class Billing extends Component {
  onToken = token => {
    fetch('/stripe', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      axios
        .post('https://ab5a9f15.ngrok.io/stripe', { w_id, response })
        .then(res => {});
      alert(JSON.stringify(response));
    });
  };

  render() {
    return (
      <div>
        <StripeCheckout
          name="Hey Team"
          description="30 Day Subscription - $9.99"
          amount={999}
          token={this.onToken}
          stripeKey="pk_test_mSszCkbADb0iAmuW6u0dWhcw"
        >
          <Checkbox
            className="checkbox"
            label="30 Day Subscription - $9.99"
            ripple
          />
          <Button raised colored>
            {' '}
            Buy Now{' '}
          </Button>
        </StripeCheckout>
      </div>
    );
  }
}
export default Billing;
