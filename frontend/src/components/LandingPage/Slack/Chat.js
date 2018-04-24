//Alex Cassell
//http://alexcassell.com
import React from "react";
import { v4 } from "uuid"; //creates unique keys

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../../css/slack.css";

let slackUsers = ["Rhonda", "Greg", "Travis", "Dan"];
let judyMessage = "If only there was a better way.. 😞";
let tempMessage = [];
let containerCSS = "wrapper";
let roomName = "cs4";
{
  /* <div className="slack__heyBotUserWrapper">
<div className="slack__heyBotUser">
  <span className="slack__glowingBullet">•</span>
  Hey Team
</div>
</div> */
}
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerCSS: containerCSS,
      judy: "",
      slackUser: "",
      heybot: "",
      messageTemplate: [
        <div className={"slack__messageWrapper"}>
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_4.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Rhonda Earliermessage
            <span className="slack__messagePosterTime"> 11:55 AM</span>
          </div>
          <div className="slack__message">
            Where can I find the video from yesterday?
          </div>
        </div>,
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_3.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Greg Q. Answers
            <span className="slack__messagePosterTime"> 11:55 AM</span>
          </div>
          <div className="slack__message">You can find it on piazza 🍕</div>
        </div>,
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_2.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Travis M. Patient
            <span className="slack__messagePosterTime"> 11:56 AM</span>
          </div>
          <div className="slack__message">
            When is this standup happening? It always starts a little late...
          </div>
        </div>,
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_5.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Dan Managertype
            <span className="slack__messagePosterTime"> 11:56 AM</span>
          </div>
          <div className="slack__message">
            Sorry the team before you is running a long again.
          </div>
        </div>,
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_6.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Judy Slackuser
            <span className="slack__messagePosterTime"> 11:56 AM</span>
          </div>
          <div className="slack__message">
            If only there was a better way.. 😞
          </div>
        </div>,
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/HeyTeamIcon.png")} alt="icon" />
          </div>
          <div className="slack__messagePoster">
            Hey Team
            <span className="slack__messagePosterTime"> 11:57 AM</span>
          </div>
          <div className="slack__message">
            Do not fret, there is a better way. I am sending all of you a DM
            right now 🚀
          </div>
        </div>
      ],
      messages: [],
      heyBotChat: [        <div className="slack__messageWrapper">
      <div className="slack__avatar">
        <img src={require("./images/HeyTeamIcon.png")} alt="icon" />
      </div>
      <div className="slack__messagePoster">
        Hey Team
        <span className="slack__messagePosterTime"> 11:57 AM</span>
      </div>
      <div className="slack__message">
        Do not fret, there is a better way. I am sending all of you a DM
        right now 🚀
      </div>
    </div>]
    };
  }

  componentWillMount = () =>{
    this.handleSkit();
  }

  componentDidMount = () =>{
    this.scrollToBottom();
  }

  componentDidUpdate = () =>{
    this.scrollToBottom();
  }

  scrollToBottom = () =>{
    this.el.scrollIntoView({ behavior: "smooth" });
  }

  handleSkit = () =>{
    let multiply = 2;
    let user = 0;
    this.state.messages.push(this.state.messageTemplate);
    let messagesDisplay = [];
    for (let i = 0; i < this.state.messages.length; i++) {
      messagesDisplay.push(
        <div key={v4()}>{this.state.messageTemplate[i]}</div>
      );
      multiply += i;
      user = i;
    }
    this.setState({
      displayMessages: messagesDisplay
    });

    if (user < 3) {
      this.setState({ slackUser: slackUsers[user + 1] + " is typing" });
      setTimeout(e => this.handleSkit(), 800 * multiply);
    } else {
      this.setState({ slackUser: "" });
      this.handleJudy(0);
    }
  }

  handleJudy = (count) =>{
    console.log(count);
    if (count < judyMessage.length - 2) {
      tempMessage[count] = judyMessage[count];
      this.setState({ judy: tempMessage });
      count++;
      setTimeout(e => this.handleJudy(count), 100);
      return;
    }
    this.setState({ judy: "" });
    this.state.messages.push(this.state.messageTemplate[4]);
    let messagesDisplay = [];
    for (let i = 0; i < this.state.messages.length; i++) {
      messagesDisplay.push(
        <div key={v4()}>{this.state.messageTemplate[i]}</div>
      );
    }
    this.setState({
      displayMessages: messagesDisplay
    });

    setTimeout(e => this.handleRescue(), 1000);
  }

  handleRescue = () =>{
    this.setState({
      heyBot: (
        <div className="slack__heyBotUserWrapper">
          <div className="slack__heyBotUser">
            <span className="slack__glowingBullet">•</span>
            Hey Team
          </div>
        </div>
      )
    });
    this.state.messages.push(this.state.messageTemplate[5]);
    let messagesDisplay = [];
    for (let i = 0; i < this.state.messages.length; i++) {
      messagesDisplay.push(
        <div key={v4()}>{this.state.messageTemplate[i]}</div>
      );
    }
    containerCSS = "wrapperAnimated";
    this.setState({
      displayMessages: messagesDisplay,
    });
    // setTimeout(e => this.handleClear, 1000);
  }
/*
this is a good stopping point. If I work on it anymore.. it will go onto show the standup.
*/
  // handleClear = () =>{
  //   this.setState({messages: ''});
  //   this.handleStandUp(0);
  // }

  // handleStandUp = (count) =>{
  //   this.state.messages.push(this.state.messageTemplate);
  //   let messagesDisplay = [];
  //   for (let i = 0; i < this.state.messages.length; i++) {
  //     messagesDisplay.push(
  //       <div key={v4()}>{this.state.messageTemplate[i]}</div>
  //     );
  //   }
  //   this.setState({
  //     displayMessages: messagesDisplay
  //   });

  // }

  render() {
    return (
      <div>
        <div className="slack__chatWindow">
          {this.state.displayMessages}
          <div
            ref={el => {
              this.el = el;
            }}
          />
        </div>
        <div className="slack__chatBox">
          <div className="slack__pseudoInput">{this.state.judy}</div>
          <div className="slack__chatBoxLeft">+</div>
          <div className="slack__chatBoxRight">
            <i className="at icon" />
            <i className="smile outline icon" />
          </div>
        </div>
        <div className="slack__typing">{this.state.slackUser}</div>
        {this.state.heyBot}
      </div>
    );
  }
}

export default Chat;
export { containerCSS };
export { roomName };
