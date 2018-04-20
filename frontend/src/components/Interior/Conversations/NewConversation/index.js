//Alex Cassell
//http://alexcassell.com
//new/edit conversation component

import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label,
  Container,
  Checkbox,
  Input,
  List,
  Radio,
  Select,
  TextArea,
  Dropdown,
  FormGroup,
  Search,
  Icon,
  Accordion,
  Popup
} from "semantic-ui-react";

import TimeZones from "./TimeZones";
import { timeZone } from "./TimeZones";
import { time } from "./TimeZones";
import { modifier } from "./TimeZones";

import Days from "./Days";
import { daysArray } from "./Days";

import Questions from "./Questions";
import { questionsArray } from "./Questions";

import Participants from "./Participants";
import { membersInfoObjectsArray } from "./Participants.js";

import { conversationsArray, editClicked } from "../index.js";
import { conversationsArrayPosition } from "../index.js";

import "../../../../css/conversations.css";

let dateStamp = String(new Date());
//this grabs local time - might need to change to GMT-0 - might need to format data
//dev only

let conversation = [
  {
    title: "test",
    days: daysArray,
    time: time,
    modifier: modifier,
    timeZone: timeZone,
    questions: questionsArray,
    // members: membersInfoObjectsArray,
    channel: "",
    date: dateStamp
  }
];

let postName, postWhere, postTime;

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: conversation
    };
  }

  componentWillMount() {
    if (editClicked) {
      console.log(conversationsArray[conversationsArrayPosition]);
      postName = conversationsArray[conversationsArrayPosition].name;
      postTime = conversationsArray[conversationsArrayPosition].time;
      postWhere = conversationsArray[conversationsArrayPosition].post;
    } else {
      postName = "Enter Name for this conversation";
      postTime = "10:00 AM";
      postWhere = "Where should we post answers?";
    }
  }

  handleInput(e) {
    if (e.target.name === "title") {
      postName = e.target.value;
    } else if (e.target.name === "time") {
      postTime = e.target.value;
      console.log(e.target);
    } else if (e.target.name === "channel") {
      postWhere = e.target.value;
    }
    this.setState({ conversation: conversation });
    // console.log(conversation);
  }

  handleFinished() {
    let newDaysArray = [];
    // for (let i = 0; i < daysArray.length; i++) {
    //   if (daysArray[i] === true) {
    //     if (i === 0) {
    //       newDaysArray.push("Mon");
    //     } else if (i === 1) {
    //       newDaysArray.push("Tue");
    //     } else if (i === 2) {
    //       newDaysArray.push("Wed");
    //     } else if (i === 3) {
    //       newDaysArray.push("Thur");
    //     } else if (i === 4) {
    //       newDaysArray.push("Fri");
    //     } else if (i === 5) {
    //       newDaysArray.push("Sat");
    //     } else if (i === 6) {
    //       newDaysArray.push("Sun");
    //     }
    //   }
    // }
    console.log(membersInfoObjectsArray);
    for (let r = 0; r < newDaysArray.length - 1; r++) {
      //does not work yet will come back
      newDaysArray[r] === newDaysArray[r] + ",";
    }
    dateStamp = String(new Date());
    conversation = [
      {
        title: postName,
        time: time,
        schedule: {
          time: time,
          modifier: modifier,
          tz: timeZone,
          mon:daysArray[0],
          tue:daysArray[1],
          wed:daysArray[2],
          thu:daysArray[3],
          fri:daysArray[4],
          sat:daysArray[5],
          sun:daysArray[6],
        },
        questions: questionsArray,
        members: membersInfoObjectsArray,
        post: postWhere,
        created: dateStamp
      }
    ];
    console.log(conversation);
    conversationsArray.unshift(conversation);
    this.handleSubmit();
    // this.props.history.push("/conversations/");
  }

  handleSubmit = async e => {
    const conversationAdd = {
      w_id: "5ad4cd023695c8d6e11b6a55",
      c: conversation[0]
    };
    console.log("submitted");
    axios
      .post(`https://f483aca5.ngrok.io/conversation/create`, conversationAdd)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    this.props.history.push("/conversations/");
  };

  render() {
    return (
      <div>
        <div className="conversations__newWrapper">
          <Form>
            <Form.Group>
              <Input
                className="ui size input"
                type="text"
                name="title"
                onChange={e => this.handleInput(e)}
                placeholder={postName}
              />
            </Form.Group>
            <Form.Group>
              <Days />
            </Form.Group>
            <Form.Group widths="equal">
              {/* Drop Down Time Zones Menu */}
              <TimeZones />
            </Form.Group>

            <Form.Group widths="equal">
              <Questions />
            </Form.Group>

            <Participants />

            <Form.Group>
              <Input
                className="ui size input"
                type="text"
                name="channel"
                onChange={e => this.handleInput(e)}
                placeholder={postWhere}
              />
              {/* </div> */}
              <Form.Button
                type="button"
                className="conversations__submitButton"
                onClick={() => this.handleFinished()}
              >
                Finished
              </Form.Button>
            </Form.Group>
            {/* <Button basic className="conversations__submitButton" onClick={() => this.handleFinished()}>Finished</Button> */}
            {/* during refactor make this button pop (maybe include snap and crackle, we will see) */}
          </Form>
        </div>
      </div>
    );
  }
}
export default New;
export { conversation };
