//Alex Cassell
//http://alexcassell.com
import React from "react";

import {roomName} from './Chat';
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
            <i className="star outline icon" />
            {roomName}
          </div>
          <div className="slack__topBar__left__top_bottom">
            <div className="slack__topBar__left__topM">Messages</div>
            <div> About</div>
          </div>
        </div>
        <div className="slack__topBar__inside">
          <i className="info circle icon" />
          <i className="cog icon" />
        </div>
        <div className="slack__topBar__rightSearch">
          <i className="search icon" />Search
        </div>
        <div className="slack__topBar__right">
          <i className="at icon" />
          <i className="star outline icon" />
          <i className="ellipsis vertical icon" />
        </div>
      </div>
    );
  }
}

export default TopBar;
