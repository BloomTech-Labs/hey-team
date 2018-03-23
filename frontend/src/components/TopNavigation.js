import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Semantic-UI-CSS/semantic.min.css';
import '../css/topNavigation.css';

import {displayHeader, shakeSignIn, shakeFeatures, shakeLogo} from './LandingPage/'


const TopNavigation = () => {
    return (
        <div className={displayHeader}>
            <Nav className="topNavigation">         
                {/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
                <div className={shakeLogo}/>
                <div className="topNavigation__items">
                    <Link to="/#features" className="Nav-link">
                    <div className={shakeFeatures}/>
                    </Link>
                </div>

                <div className="topNavigation__items">
                    <Link to="/welcome" className="Nav-link">
                        <div className={shakeSignIn}/>
                    </Link>
                </div>
            </Nav>
        </div>
    );
};
export default TopNavigation;