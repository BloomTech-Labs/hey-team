import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Nav className="topNavigation">
                <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div>
                <div className="topNavigation__items"><Link to="/billing" className="Nav-link">Billing</Link></div>
                <div className="topNavigation__items"><Link to="/preferences" className="Nav-link">Preferences</Link></div>
                <div className="topNavigation__items"><Link to="/conversations" className="Nav-link">Conversations</Link></div>
            </Nav>
        </div>
    );
};
export default Navigation;