//Alex Cassell
//http://alexcassell.com
//schedule for view

import React from 'react';

import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let days;
let time;

class Schedule extends React.Component {
    constructor() {
        super();
        this.state = {theWhen:days + " at " + time};}
    
    componentDidMount(){
        days = conversationsArray[conversationsArrayPosition].schedule;
        time = conversationsArray[conversationsArrayPosition].time;
        this.setState({theWhen:days + " at " + time});
    }
        
        render() {
            return (
                <div>
                    {this.state.theWhen}
                </div>
                );
            }
        }
        


export default Schedule;