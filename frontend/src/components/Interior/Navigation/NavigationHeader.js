//Alex Cassell
//http://alexcassell.com

import React from 'react';

// import '../../../Semantic-UI-CSS/semantic.min.css';

import '../../../css/interior.css';
import InsideNavigation from './InsideNavigation';


class NavigationHeader extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }
    render() {
        return (
            <div className="interior__wrapper">
            <div className="logo"/>
            <div className="interior__signOut"/>
                <InsideNavigation />{/*Side menu */}
            </div>
        );
}
}

export default NavigationHeader;