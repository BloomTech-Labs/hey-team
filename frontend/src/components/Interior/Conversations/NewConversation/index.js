//Alex Cassell
//http://alexcassell.com
//new/edit conversation component

import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

import TimeZones from './TimeZones';
import { timeZone } from './TimeZones';

import Days from './Days';
import {daysArray} from './Days';

import Questions from './Questions';
import {questionsArray} from './Questions'

import Participants from '../Participants';

import {conversationsArray, editClicked} from '../index.js'
import {conversationsArrayPosition} from '../index.js'

import '../../../../css/conversations.css';

let dateStamp = String(new Date()); 
//this grabs local time - might need to change to GMT-0 - might need to format data
//dev only
let participantsData = [[{userName: "fred", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {}, answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]},{userName: "Jorge", responseTime: "10:17:AM", responseDate: "04-12-2018", imageData: {}, answers:["Yup", "nope", "could be", "yea probably", "who knows", "I did not hear that"]},{userName: "Fran", responseTime: "09:37:AM", responseDate: "02-22-2018", imageData: {}, answers:["hotdog", "tacos then?", "pizza is almost certainly true", "with pineapples of course", "and mayonnaise", "No I am not sick"]},{userName: "Jules", responseTime: "12:27:PM", responseDate: "01-11-2017", imageData: {}, answers:["A river of denile", "Panda bears", "are true bears", "even though that is against the myth", "that mice", "mine cheese"]},{userName: "Bobby", responseTime: "1:07:PM", responseDate: "03-12-2018", imageData: {},answers:["windshield wipers slapping time", "for one single day with", "just another word for nothing left to lose", "Kris did it best", "rusty harpoon and red bandanas", "people"]},{userName: "Dan", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {},answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]},{userName: "Cindy", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {}, answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]}]];
let conversation  = {name:"", days:daysArray, time:"", timeZone:timeZone,
    questions: questionsArray, participants: participantsData, channel: "", date:dateStamp};

let postName, postTime, postWhere;

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversation: conversation
        };
    }

    componentWillMount(){
        if(editClicked){
            postName = conversationsArray[conversationsArrayPosition].name;
            postTime = conversationsArray[conversationsArrayPosition].time;
            postWhere = conversationsArray[conversationsArrayPosition].post;
        }
        else{
            postName = "Enter Name for this conversation";
            postTime = "10:00 AM"
            postWhere = "Where should we post answers?" 
        }
    }


    handleInput(e){
        if(e.target.name === "name"){
            conversation["name"] = e.target.value;
        }
        else if (e.target.name === "time"){
            conversation["time"] = e.target.value;
        }
        else if (e.target.name === "channel"){
            conversation["channel"] = e.target.value;
        }
        this.setState({conversation:conversation});
        // console.log(conversation);
    }

    handleFinished(){
        dateStamp = String(new Date());
        conversation  = {name:postName, time:postTime, schedule:daysArray, created:dateStamp, timeZone:timeZone,
        post:postWhere, questions: questionsArray, participants: participantsData};
        conversationsArray.unshift(conversation);
        this.props.history.push('/conversations/');
        console.log(conversationsArray);
        // {name:"Stand Up CS1", time: "12:20 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018", timeZone:"loaded time zone", post:"channel Zero", questions:["1some silly question", "some sillier question", "a question that makes sense", "Another perfectly correct questions", "A question that might get you sued", "What is it about planes?"], participants:[[{userName: "fred", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {}, answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]},{userName: "Jorge", responseTime: "10:17:AM", responseDate: "04-12-2018", imageData: {}, answers:["Yup", "nope", "could be", "yea probably", "who knows", "I did not hear that"]},{userName: "Fran", responseTime: "09:37:AM", responseDate: "02-22-2018", imageData: {}, answers:["hotdog", "tacos then?", "pizza is almost certainly true", "with pineapples of course", "and mayonnaise", "No I am not sick"]},{userName: "Jules", responseTime: "12:27:PM", responseDate: "01-11-2017", imageData: {}, answers:["A river of denile", "Panda bears", "are true bears", "even though that is against the myth", "that mice", "mine cheese"]},{userName: "Bobby", responseTime: "1:07:PM", responseDate: "03-12-2018", imageData: {},answers:["windshield wipers slapping time", "for one single day with", "just another word for nothing left to lose", "Kris did it best", "rusty harpoon and red bandanas", "people"]},{userName: "Dan", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {},answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]},{userName: "Cindy", responseTime: "10:07:AM", responseDate: "03-12-2018", imageData: {}, answers:["Yes, I loved", "That was the worst thing I have ever done", "I cam a dog person, cats scare me", "This is probably tree", "I want to press charges", "The sky is blue and so is the water"]}]]},
        //make sure object is correct then upload to server
    }

    render() {
        return (
            <div className="conversationsBackground">
                <div className="conversations__newWrapper">
                    <Input className="ui size input" type="text" name="name" onChange={(e) => this.handleInput(e)} placeholder={postName}/>
                        <Days />
                    <div className="conversations__time">
                        <Input className="ui size input small" type="text" name="time" onChange={(e) => this.handleInput(e)} placeholder={postTime}/>
                        {/* After time is submitted reformat to look like 10:00:AM */}

                        {/* Drop Down Time Zones Menu */}
                        <TimeZones />

                        <div className="conversations__showTimeZone">
                            {timeZone}
                        </div>
                    </div>
                    <div className="conversations__questionsSpacer">
                        <Questions />
                    </div>

                    <div className="conversations__participantWrapper">
                        <div className="conversations__participant">
                            Participants
                        </div>
                        <div className="conversations__participant">
                        {/* this has to hook into the backend */}
                            <Input icon="search" className="ui size input small" type="text" name="search" placeholder="Search"/> 
                        </div>
                        <div className="conversations__participants__icons">
                        {/* icons for particpants will be loaded here */}
                            <Participants />
                        </div>
                    </div>
                    <div className="conversations__channel">
                        <Input className="ui size input" type="text" name="channel" onChange={(e) => this.handleInput(e)} placeholder={postWhere}/> 
                    </div>
                    <Button basic className="conversations__submitButton" onClick={() => this.handleFinished()}>Finished</Button>
                    {/* during refactor make this button pop (maybe include snap and crackle, we will see) */}
                </div>
            </div>
            );
        }
    }
export default New;
export {conversation};
