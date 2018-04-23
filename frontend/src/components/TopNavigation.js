//Alex Cassell
//http://alexcassell.com
import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../css/topNavigation.css";

import { displayHeader, shakeSignIn, shakeLogo } from "./LandingPage/";

const TopNavigation = () => {
  return (
    <div className={displayHeader}>
      <Nav className="topNavigation">
        <div className={shakeLogo} />
        <div className="topNavigation__items">
          <Link to="/welcome" className="Nav-link">
            <div className={shakeSignIn} />
          </Link>
        </div>
      </Nav>
    </div>
  );
};
export default TopNavigation;
