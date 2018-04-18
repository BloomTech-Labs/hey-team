import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Checkbox } from 'react-mdl';
import axios from 'axios';
// const w_id = localStorage.doc_id;
const w_id = '5ad4cebecb2cb341f09211ee';
// onToken = token => {
//   fetch('/stripe', {
//     method: 'POST',
//     body: JSON.stringify(token),
//   }).then(res => {
//     alert('Payment Successful');
//   });
// };

class Billing extends Component {
  onToken = token => {
    axios
      .post('https://ab5a9f15.ngrok.io/stripe', { w_id, token })
      .then(res => {
        alert('Payment Successful');
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
