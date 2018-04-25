//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../css/landingPageTop.css";
import SlackIndex from './Slack';
import {containerCSS} from './Slack/Chat';

let displayHeader = "header";


class LandingPageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: "" };
  }

  handleBuyButton() {
    window.location.replace("https://slack.com/oauth/authorize?scope=users:read,users:read.email,team:read&client_id=270618182930.333388702161&redirect_uri=https://heyteam-backend.herokuapp.com/auth/login","_self")
  }

  render() {
    return (
      <div className={containerCSS}>
        <div className="landingTop">
            <SlackIndex />
            <div className="button__BuyNow">
              <Button
                positive
                className="ui color1 button"
                onClick={() => this.handleBuyButton()}
              >
                Buy Now!
              </Button>
              <div className="landingTop__words">
                Hey Team is a Standup Bot for Slack.
                <div className="landing__trial">
                *start your 30 day free trial no credit card required
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageIndex;
export { displayHeader };
