import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../Semantic-UI-CSS/semantic.min.css';
import '../css/topNavigation.css';

import {displayHeader} from './LandingPage/'


const TopNavigation = () => {
    return (

        <div className={displayHeader}>
            <Nav className="topNavigation">         
                {/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
                <div className="logo"/>
                <div className="topNavigation__items">
                    <Link to="/#features" className="Nav-link">
                    <div className="features__default"/>
                    </Link>
                </div>

                <div className="topNavigation__items">
                    <Link to="/welcome" className="Nav-link">
                        <div className="signIn__default"/>
                    </Link>
                </div>
            </Nav>
        </div>
    );
};
export default TopNavigation;