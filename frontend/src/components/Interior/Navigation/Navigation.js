import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Nav>
            <div><Link to="/conversations" className="Interior__Nav-link">Conversations</Link></div>
            <div><Link to="/preferences" className="Interior__Nav-link">Preferences</Link></div>
            <div><Link to="/billing" className="Interior__Nav-link">Billing</Link></div>
        </Nav>
    );
};
export default Navigation;