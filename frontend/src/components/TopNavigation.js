import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../Semantic-UI-CSS/semantic.min.css';
import '../css/topNavigation.css';
import logo from '../images/logo.png';

const TopNavigation = () => {
    return (
        <div className="header">
            <Nav className="topNavigation">         
                {/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
                <div className="logo"/>
                <div className="topNavigation__items topNavigation__padding"><Link to="/#features" className="Nav-link">Features</Link></div>
                <div className="topNavigation__items signin"><Link to="/welcome" className="Nav-link">Sign In</Link></div>

                {/* Alex: the block of code below does not work in Firefox.. will look at this more once site is completed */}
                {/* <Button inverted color='blue' animated='fade'>
                    <Button.Content visible>
                    <Link to="/welcome" className="Nav-link">Sign In</Link>
                    </Button.Content>
                    <Button.Content hidden>
                    <Link to="/welcome" className="Nav-link">Welcome!</Link>
                    </Button.Content>
                </Button> */}
            </Nav>
        </div>
    );
};
export default TopNavigation;