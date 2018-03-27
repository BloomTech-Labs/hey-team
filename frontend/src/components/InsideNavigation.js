import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../css/interiorNavigation.css';

const InsideNavigation = () => {
    return (
        <div>
            <Nav className="interiorNavigation">
                <div className="interiorNavigation__items interiorNavigation__items__spacer"><Link to="/conversations" className="Interior__Nav-link">Conversations</Link></div>
                <div className="interiorNavigation__items"><Link to="/preferences" className="Interior__Nav-link">Preferences</Link></div>
                <div className="interiorNavigation__items"><Link to="/billing" className="Interior__Nav-link">Billing</Link></div>
            </Nav>
        </div>
    );
};
export default InsideNavigation;