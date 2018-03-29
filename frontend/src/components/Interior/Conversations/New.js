//Mikias Hundie
//Alex Cassell
import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';

//grabs users timezone -- until default is set in preferences
let getTimeZone = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];
/* converts getTimeZone to something like GMT-0400; Chrome likes to add a seemingly 
random place within the timezone with the rest of the info */
let timeZone = getTimeZone.substring(0,8);

                                    //days array starts with Monday 1 for message scheduled for that day
let conversations  = [{name:"Fred", days:[0, 1, 0, 1, 0, 0, 0], time:"10:00 AM", 
    questions: ["Question One", "Question Two"], participants: ["@user1", "@user2"], channel: "SomeChannelName"}];

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversations: conversations
        };
    }




    handleTimeZone(e){
        timeZone = e.target.name;
    }


    render() {
        return ( 
            <div className="conversations__newWrapper">
                <Input className="ui size input" type="text" name="name"placeholder="Enter Name for this Conversation"/>
                <div className="conversations__schedule">
                    <Button basic>Mon</Button>
                    <Button basic>Tue</Button>
                    <Button basic>Wed</Button>
                    <Button basic>Thur</Button>
                    <Button basic>Fri</Button>
                    <Button color="grey">Sat</Button>
                    <Button color="grey">Sun</Button>
                </div>
                <div className="conversations__time">
                    <Input className="ui size input small" type="text" name="time" placeholder="10:00 AM"/>
                    <div class="conversations__timeZoneDropdown">
                        <button class="conversations__dropbtn">Time Zones</button>
                        <div class="conversations__dropdown-content">
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="LINT: UTC+14" onClick={(e) => this.handleTimeZone(e)} href="#">LINT: UTC+14</a>
                                <a className="conversations__timeZone__square" name="CHADT: UTC+13:45" onClick={(e) => this.handleTimeZone(e)} href="#">CHADT: UTC+13:45</a>
                                <a className="conversations__timeZone__square" name="NZDT: UTC+13" onClick={(e) => this.handleTimeZone(e)} href="#">NZDT: UTC+13</a>
                                <a className="conversations__timeZone__square" name="ANAT: UTC+12" onClick={(e) => this.handleTimeZone(e)} href="#">ANAT: UTC+12</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="AEST: UTC+10" onClick={(e) => this.handleTimeZone(e)} href="#">AEST: UTC+10</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+9:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+9:30</a>
                                <a className="conversations__timeZone__square" name="JST: UTC+9" onClick={(e) => this.handleTimeZone(e)} href="#">JST: UTC+9</a>
                                <a className="conversations__timeZone__square" name="ACWST: UTC+8:45" onClick={(e) => this.handleTimeZone(e)} href="#">ACWST: UTC+8:45</a>
                                <a className="conversations__timeZone__square" name="ADT: UTC−03" onClick={(e) => this.handleTimeZone(e)} href="#">ADT: UTC−03</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+09:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+09:30</a>
                                <a className="conversations__timeZone__square" name="ACT: UTC−05" onClick={(e) => this.handleTimeZone(e)} href="#">ACT: UTC−05</a>
                                <a className="conversations__timeZone__square" name="ACWST: UTC+08:45" onClick={(e) => this.handleTimeZone(e)} href="#">ACWST: UTC+08:45</a>
                                <a className="conversations__timeZone__square" name="ADT: UTC−03" onClick={(e) => this.handleTimeZone(e)} href="#">ADT: UTC−03</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+09:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+09:30</a>
                                <a className="conversations__timeZone__square" name="ACT: UTC−05" onClick={(e) => this.handleTimeZone(e)} href="#">ACT: UTC−05</a>
                                <a className="conversations__timeZone__square" name="ACWST: UTC+08:45" onClick={(e) => this.handleTimeZone(e)} href="#">ACWST: UTC+08:45</a>
                                <a className="conversations__timeZone__square" name="ADT: UTC−03" onClick={(e) => this.handleTimeZone(e)} href="#">ADT: UTC−03</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+09:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+09:30</a>
                                <a className="conversations__timeZone__square" name="ACT: UTC−05" onClick={(e) => this.handleTimeZone(e)} href="#">ACT: UTC−05</a>
                                <a className="conversations__timeZone__square" name="ACWST: UTC+08:45" onClick={(e) => this.handleTimeZone(e)} href="#">ACWST: UTC+08:45</a>
                                <a className="conversations__timeZone__square" name="ADT: UTC−03" onClick={(e) => this.handleTimeZone(e)} href="#">ADT: UTC−03</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+09:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+09:30</a>
                                <a className="conversations__timeZone__square" name="ACT: UTC−05" onClick={(e) => this.handleTimeZone(e)} href="#">ACT: UTC−05</a>
                                <a className="conversations__timeZone__square" name="ACWST: UTC+08:45" onClick={(e) => this.handleTimeZone(e)} href="#">ACWST: UTC+08:45</a>
                                <a className="conversations__timeZone__square" name="ADT: UTC−03" onClick={(e) => this.handleTimeZone(e)} href="#">ADT: UTC−03</a>
                                <a className="conversations__timeZone__square" name="AEDT: UTC+11" onClick={(e) => this.handleTimeZone(e)} href="#">AEDT: UTC+11</a>
                            </div>
                            <div className="conversations__timezones__row">
                                <a className="conversations__timeZone__square" name="ACDT: UTC+10:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACDT: UTC+10:30</a>
                                <a className="conversations__timeZone__square" name="ACST: UTC+09:30" onClick={(e) => this.handleTimeZone(e)} href="#">ACST: UTC+09:30</a>
                            </div>
                        </div>
                    </div>
                    <div className="conversations__showTimeZone">{timeZone}</div>
                </div>
                <div className="conversations__questions">
                    <Input className="ui size input small" type="text" name="question" placeholder="Type a question"/>
                    <button className="conversations__buttonAdd"><i className="fa fa-plus-circle fa-2x"></i></button>
                </div>
                <div className="conversations__participantWrapper">
                    <div className="conversations__participant">
                        Participants
                    </div>
                    <div className="conversations__participant">
                        <Input icon="search" className="ui size input small" type="text" name="search" placeholder="Search"/> 
                    </div>
                    <div className="conversations__participants__icons">
                    [][][][][][][][][][][][][][]
                    </div>
                </div>
                <div className="conversations__channel">
                <Input className="ui size input" type="text" name="channel" placeholder="Where should we post answers?"/> 
                </div>
            </div>
            );
        }
    }
export default New;
