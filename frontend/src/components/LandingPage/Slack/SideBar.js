//Alex Cassell
//http://alexcassell.com
import React from "react";

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../../css/slack.css";

const SideBar = () => (
  <div className="slack__SideBar">
    <div className="slack__title slack__hoverDark">
      Lambda School ...
      <i class="angle down icon" />
      <i class="bell outline icon" />
      <div className="slack__user">
        <span className="slack__glowingBullet">•</span>
        Judy Slackuser
      </div>
    </div>
    <div className="slack__jumpTo">
      <i class="bars icon" />Jump to...
    </div>
    <div className="slack__subTitles slack__hoverDark">
      <i class="comment alternate outline icon" />All Threads
    </div>
    <div className="slack__spacer" />
    <div className="slack__subTitles">Starred</div>
    <div className="slack__channels slack__hoverDark">
      <i class="lock icon" />cs4
    </div>
    <div className="slack__channels slack__hoverDark">
      <i class="lock icon" />labs-heyteam
    </div>
    <div className="slack__spacer" />
    <div className="slack__subTitles">
      <span className="slack__hoverBright">Channels</span>
      <span className="slack__spacedIcons">
        <i class="plus circle icon right" />
      </span>
    </div>
    <div className="slack__channels slack__hoverDark">
      <i class="slack hash icon" />announcements
    </div>
    <div className="slack__channels slack__hoverDark">
      <i class="slack hash icon" />micro-computers
    </div>
    <div className="slack__channels slack__hoverDark">
      <i class="slack hash icon" />game-development
    </div>
    <div className="slack__channels slack__hoverDark">
      <i class="slack hash icon" />starwars
    </div>
  </div>
);

export default SideBar;
