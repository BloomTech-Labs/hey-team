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
                <div className="logo">
                    <img src={logo} alt={"Temp Logo"}/>
                </div>
                <div className="topNavigation__items"><Link to="/#features" className="Nav-link">Features</Link></div>
                <Button inverted color='blue' animated='fade'>
                    <Button.Content visible>
                    <Link to="/signin" className="Nav-link">Sign In</Link>
                    </Button.Content>
                    <Button.Content hidden>
                    <Link to="/welcome" className="Nav-link">Welcome!</Link>
                    </Button.Content>
                </Button>
            </Nav>
        </div>
    );
};
export default TopNavigation;