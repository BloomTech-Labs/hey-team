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
      <i className="angle down icon" />
      <i className="bell outline icon" />
      <div className="slack__user">
        <span className="slack__glowingBullet">•</span>
        Judy Slackuser
      </div>
    </div>
    <div className="slack__jumpTo">
      <i className="bars icon" />Jump to...
    </div>
    <div className="slack__subTitles slack__hoverDark">
      <i className="comment alternate outline icon" />All Threads
    </div>
    <div className="slack__spacer" />
    <div className="slack__subTitles">Starred</div>
    <div className="slack__channels slack__hoverDark">
      <i className="lock icon" />cs4
    </div>
    <div className="slack__channels slack__hoverDark">
      <i className="lock icon" />labs-heyteam
    </div>
    <div className="slack__spacer" />
    <div className="slack__subTitles">
      <span className="slack__hoverBright">Channels</span>
      <span className="slack__spacedIcons">
        <i className="plus circle icon right" />
      </span>
    </div>
    <div className="slack__channels slack__hoverDark">
      <i className="slack hash icon" />announcements
    </div>
    <div className="slack__channels slack__hoverDark">
      <i className="slack hash icon" />micro-computers
    </div>
    <div className="slack__channels slack__hoverDark">
      <i className="slack hash icon" />game-development
    </div>
    <div className="slack__channels slack__hoverDark">
      <i className="slack hash icon" />starwars
    </div>
    <div className="slack__directMessages">
      <div className="slack__subTitles">
        <span className="slack__hoverBright" data-tooltip="Open a direct message" data-inverted="">Direct Messages</span>
        <span className="slack__spacedDMIcons">
          <i className="plus circle icon right" />
        </span>
      </div>

      {/* <div className="ui icon button" data-tooltip="Add users to your feed" data-inverted="">
  <i className="add icon"></i>
</div> */}
      <div className="slack__directMessagesUsers">
        <div className="slack__user slack__hoverDark slack__directMessagesUsersCorrection">
          <span className="slack__glowingBullet">•</span>
          Tom Impatient
        </div>
        <div className="slack__user slack__hoverDark slack__directMessagesUsersCorrection">
          <span className="slack__glowingBullet">•</span>
          Dan Managertype
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
