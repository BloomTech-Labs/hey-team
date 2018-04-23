//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../css/landingPageTop.css";
import TopNavigation from "../TopNavigation";
import SlackIndex from './Slack'

let displayHeader = "header",
  shakeSignIn = "signIn__default",
  shakeLogo = "logo";

let scrollCount = 0; //if we want to add animations that only happen when the user has scrolled down a certain amount

class LandingPageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: "" };
  }

  handleBuyButton() {
    this.props.history.push("/welcome");
  }

  render() {
    return (
      <div className="wrapper">
        <TopNavigation />
        <div className="landingTop">
            <SlackIndex />
            {/* button is no longer working correctly.. will have to take it apart */}
            <div className="button__BuyNow">
              <Button
                positive
                className="ui color1 button"
                onClick={() => this.handleBuyButton()}
              >
                Buy Now!
              </Button>
              <div className="landingTop__words">
                Words about this product
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageIndex;
export { displayHeader };
export { shakeSignIn };
export { shakeLogo };
