import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import '../Semantic-UI-CSS/semantic.min.css';
import '../css/topNavigation.css';

const TopNavigation = () => {
    return (
        <div>
            <Nav className="topNavigation">
                {/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
                <button className="button__hidden"><div className="topNavigation__items"><Link to="/#features" className="Nav-link">Features</Link></div></button>
                <Button className="button" animated='fade'>
                    <Button.Content visible>
                    <Link to="/signin" className="Nav-link">Sign In</Link>
                    </Button.Content>
                    <Button.Content hidden>
                    <Link to="/welcome" className="Nav-link">Come On In!</Link>
                    </Button.Content>
                </Button>
            </Nav>
        </div>
    );
};
export default TopNavigation;