//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../../css/slack.css";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: "" };
  }

  render() {
    return (
      <div className="slack__topBar">
        <div className="slack__topBar__left">
          <div className="slack__topBar__left__top">
            <i class="star outline icon" />
            Hey Team
          </div>
          <div className="slack__topBar__left__top_bottom">
            <div className="slack__topBar__left__topM">Messages</div>
            <div> About</div>
          </div>
        </div>
        <div className="slack__topBar__inside">
          <i class="info circle icon" />
          <i class="cog icon" />
        </div>
        <div className="slack__topBar__rightSearch">
          <i class="search icon" />Search
        </div>
        <div className="slack__topBar__right">
          <i class="at icon" />
          <i class="star outline icon" />
          <i class="ellipsis vertical icon" />
        </div>
      </div>
    );
  }
}

export default TopBar;
