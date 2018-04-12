//Alex Cassell
//http://alexcassell.com

import React from 'react';
import '../../../css/interior.css';
import Billing from './Billing';


class BillingIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }
    render() {
        return (
            <div>
            <Billing />
            </div>
        );
}
}

export default BillingIndex;