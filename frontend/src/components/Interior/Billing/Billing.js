import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Checkbox } from 'react-mdl';


class Billing extends Component {
  // onToken = token => {
  //   fetch ('api/stripe', {
  //     method: 'POST',
  //     body: JSON.stringify (token),
  //   }).then (res => {
  //     alert ('Payment Successful');
  //   });
  // };

  
  onToken = token => {
    fetch ('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify (token),
    }).then (res => {
      alert ('Payment Successful');
    });
  };

  render () {
    return (
      
      <div >
      <StripeCheckout
        name="Hey Team"
        description="30 Day Subscription - $9.99"
        amount={999}
        token={this.onToken}
        stripeKey="pk_test_mSszCkbADb0iAmuW6u0dWhcw"
      >
      <Checkbox className="checkbox" label="30 Day Subscription - $9.99" ripple/> 
      <Button onClick = {() => this.onToken()}raised colored> Buy Now </Button>
      </StripeCheckout>

      </div>
    );
  }
}

export default Billing;
