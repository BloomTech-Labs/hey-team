//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Chat from "./Chat";
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
        <Chat />
      </div>
    );
  }
}

export default SlackIndex;
