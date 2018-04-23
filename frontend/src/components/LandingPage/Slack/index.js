//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import SideBar from "./SideBar";
import TopBar from "./TopBar";
import "../../../css/slack.css";

class SlackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { header: "" };
  }

  render() {
    return (
      <div className="slackWrapper">
        <SideBar />
        <TopBar />
        <div className="slack__chatBox">
          <div className="slack__chatBoxLeft">
            +
          </div>
          <div className="slack__chatBoxRight">
          <i class="at icon" />
          <i class="smile outline icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SlackIndex;
