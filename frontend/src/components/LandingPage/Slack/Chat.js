//Alex Cassell
//http://alexcassell.com
import React from "react";
import { v4 } from "uuid"; //creates unique keys

import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../../../css/slack.css";
// let messagesDisplay = [];
// const messageList = messagesDisplay.map((message) =>
//   <div>{message}</div>
// );

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageTemplate: (
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_1.png")} alt="icon one" />
          </div>
          <div className="slack__messagePoster">
            Some Name
            <span className="slack__messagePosterTime"> 11:56 PM</span>
          </div>
          <div className="slack__message">Hey slack bot what you doin?</div>
        </div>
      ),
      messages: [
        <div className="slack__messageWrapper">
          <div className="slack__avatar">
            <img src={require("./images/slackIcon_1.png")} alt="icon one" />
          </div>
          <div className="slack__messagePoster">
            Some Name
            <span className="slack__messagePosterTime"> 11:56 PM</span>
          </div>
          <div className="slack__message">Hey slack bot what you doin?</div>
        </div>
      ]
    };
  }

  componentWillMount() {
    this.handleSkit();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }

  handleSkit() {
    this.state.messages.push(this.state.messageTemplate);
    // this.setState({ messages: messagesDisplay });
    // // messagesDisplay = this.state.messages;
    // console.log(this.state.messages);
    // setTimeout(this.handleSkit.bind(this), 800);
    /*
        cardArray = [];
    // console.log(cardArray);
    */
    let messagesDisplay = [];
    for (let i = 0; i <this.state.messages.length; i++) {
      messagesDisplay.push(<div  key={v4()}>{this.state.messageTemplate}</div>);
      // tempArray[i] = (this.state.messageTemplate);
    }
    this.setState({ displayMessages: messagesDisplay });
    // setTimeout(this.handleSkit.bind(this), 800);
    
  }

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
          <div className="slack__chatBoxLeft">+</div>
          <div className="slack__chatBoxRight">
            <i className="at icon" />
            <i className="smile outline icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
