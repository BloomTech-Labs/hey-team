//Alex Cassell
//http://alexcassell.com
//new conversation component

import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

import TimeZones from './TimeZones';
import { timeZone } from './TimeZones';

import Days from './Days';
import {daysArray} from './Days';

import Questions from './Questions';

import '../../../../css/conversations.css';
import FontAwesome from 'react-fontawesome';

let conversation  = {name:"", days:daysArray, time:"", timeZone:timeZone,
    questions: [], participants: ["@", "@"], channel: ""};

let questionSecondary = <Input className="ui size input" type="text" name="question" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/>;

let question = <div><Input className="ui size input" type="text" name="question" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><button className="conversations__buttonAdd"  onClick={(e) => this.handleAddingQuestions(e)}><i className="fa fa-plus-circle fa-2x"></i></button></div>;

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversation: conversation,
            questions: [question, questionSecondary, questionSecondary]
        };
    }


    handleInput(e){
        if(e.target.name === "name"){
            conversation["name"] = e.target.value;
        }

        else if (e.target.name === "time"){
            conversation["time"] = e.target.value;
        }
        else if(e.target.name === "question"){
            // if(conversation["questions"][0] === undefined){
            //     conversation["questions"][0] = e.target.value;
            // }
            // else

            /*when the + button is prssed to add another question
                an integer var is increased by 1
                --come back to this when I am less sleepy

                --maybe the question is not saved until the plus button
                is pressed to add another question - then add a save questions
                button-- maybe
            */
        }
        else if (e.target.name === "channel"){
            conversation["channel"] = e.target.value;
        }
        this.setState({conversation:conversation});
        console.log(conversation);
    }

    handleAddingQuestions(){
        // this.setState({questions:});
    }


    render() {
        return ( 
            <div className="conversations__newWrapper">
                <Input className="ui size input" type="text" name="name" onChange={(e) => this.handleInput(e)} placeholder="Enter Name for this Conversation"/>
                    <Days />
                <div className="conversations__time">
                    <Input className="ui size input small" type="text" name="time" onChange={(e) => this.handleInput(e)} placeholder="10:00 AM"/>
                    {/* Drop Down Time Zones Menu */}
                    <TimeZones />

                    <div className="conversations__showTimeZone">{timeZone}</div>
                </div>
                <Questions />

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
                    [][][][][][][][][][][][][][]
                    </div>
                </div>
                <div className="conversations__channel">
                    <Input className="ui size input" type="text" name="channel" onChange={(e) => this.handleInput(e)} placeholder="Where should we post answers?"/> 
                </div>
            </div>
            );
        }
    }
export default New;
