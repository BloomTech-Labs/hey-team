//Mikias Hundie
//Alex Cassell
import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';




class New extends Component {
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
                    <div className="conversations__timeZone">
                        drop down TimeZones
                    </div>
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
                        <Input icon="search" className="ui input participants" type="text" name="search" placeholder="Search"/> 
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
