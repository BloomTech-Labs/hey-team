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
let membersData = [
  [
    {
      userName: "fred",
      responseTime: "10:07:AM",
      responseDate: "03-12-2018",
      imageData: {},
      answers: [
        "Yes, I loved",
        "That was the worst thing I have ever done",
        "I cam a dog person, cats scare me",
        "This is probably tree",
        "I want to press charges",
        "The sky is blue and so is the water"
      ]
    },
    {
      userName: "Jorge",
      responseTime: "10:17:AM",
      responseDate: "04-12-2018",
      imageData: {},
      answers: [
        "Yup",
        "nope",
        "could be",
        "yea probably",
        "who knows",
        "I did not hear that"
      ]
    },
    {
      userName: "Fran",
      responseTime: "09:37:AM",
      responseDate: "02-22-2018",
      imageData: {},
      answers: [
        "hotdog",
        "tacos then?",
        "pizza is almost certainly true",
        "with pineapples of course",
        "and mayonnaise",
        "No I am not sick"
      ]
    },
    {
      userName: "Jules",
      responseTime: "12:27:PM",
      responseDate: "01-11-2017",
      imageData: {},
      answers: [
        "A river of denile",
        "Panda bears",
        "are true bears",
        "even though that is against the myth",
        "that mice",
        "mine cheese"
      ]
    },
    {
      userName: "Bobby",
      responseTime: "1:07:PM",
      responseDate: "03-12-2018",
      imageData: {},
      answers: [
        "windshield wipers slapping time",
        "for one single day with",
        "just another word for nothing left to lose",
        "Kris did it best",
        "rusty harpoon and red bandanas",
        "people"
      ]
    },
    {
      userName: "Dan",
      responseTime: "10:07:AM",
      responseDate: "03-12-2018",
      imageData: {},
      answers: [
        "Yes, I loved",
        "That was the worst thing I have ever done",
        "I cam a dog person, cats scare me",
        "This is probably tree",
        "I want to press charges",
        "The sky is blue and so is the water"
      ]
    },
    {
      userName: "Cindy",
      responseTime: "10:07:AM",
      responseDate: "03-12-2018",
      imageData: {},
      answers: [
        "Yes, I loved",
        "That was the worst thing I have ever done",
        "I cam a dog person, cats scare me",
        "This is probably tree",
        "I want to press charges",
        "The sky is blue and so is the water"
      ]
    }
  ]
];
let conversation = [
  {
    title: "test",
    days: daysArray,
    time: "10:45",
    timeZone: timeZone,
    questions: questionsArray,
    members: membersInfoObjectsArray,
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
    for (let i = 0; i < daysArray.length; i++) {
      if (daysArray[i] === true) {
        if (i === 0) {
          newDaysArray.push("Mon");
        } else if (i === 1) {
          newDaysArray.push("Tue");
        } else if (i === 2) {
          newDaysArray.push("Wed");
        } else if (i === 3) {
          newDaysArray.push("Thur");
        } else if (i === 4) {
          newDaysArray.push("Fri");
        } else if (i === 5) {
          newDaysArray.push("Sat");
        } else if (i === 6) {
          newDaysArray.push("Sun");
        }
      }
    }
    for (let r = 0; r < newDaysArray.length - 1; r++) {
      //does not work yet will come back
      newDaysArray[r] === newDaysArray[r] + ",";
    }
    dateStamp = String(new Date());
    conversation = [
      {
        title: postName,
        time: time,
        schedule: newDaysArray,
        created: dateStamp,
        timeZone: timeZone,
        post: postWhere,
        questions: questionsArray,
        members: membersInfoObjectsArray
      }
    ];
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
