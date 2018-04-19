//Alex Cassell
//http://alexcassell.com
import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../css/topNavigation.css';

import {
	displayHeader,
	shakeSignIn,
	shakeFeatures,
	shakeLogo
} from './LandingPage/';

const TopNavigation = () => {
	return (
		<div className={displayHeader}>
			<Nav className="topNavigation">
				{/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
				<div className={shakeLogo} />
				<div className="topNavigation__items">
					<Link to="#features" className="Nav-link">
						<div className={shakeFeatures} />
					</Link>
				</div>

				<div className="topNavigation__items">
					<a href="https://slack.com/oauth/authorize?scope=users:read,users:read.email,team:read&client_id=270618182930.333388702161&redirect_uri=https://64e527cb.ngrok.io/auth/login">
						<img src="https://api.slack.com/img/sign_in_with_slack.png" />
					</a>
					{/* <Link to="/welcome" className="Nav-link">
                        <div className={shakeSignIn}/>
                    </Link> */}
				</div>
			</Nav>
		</div>
	);
};
export default TopNavigation;
