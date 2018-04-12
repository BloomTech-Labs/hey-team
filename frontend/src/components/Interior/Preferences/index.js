//Alex Cassell
//http://alexcassell.com

import React from 'react';
import '../../../css/preferences.css';

class PreferencesIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }
    render() {
        return (
            <div className="preferencesWrapper">
                Preferences
            </div>
        );
}
}

export default PreferencesIndex;