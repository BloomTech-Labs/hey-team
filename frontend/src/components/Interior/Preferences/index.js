//Alex Cassell
//http://alexcassell.com

import React from 'react';
import '../../../css/interior.css';
import Preferences from './Preferences';

class PreferencesIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }
    render() {
        return (
            <div>
                <Preferences />
            </div>
        );
}
}

export default PreferencesIndex;