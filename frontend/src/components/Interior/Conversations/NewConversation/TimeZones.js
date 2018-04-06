//Alex Cassell
//http://alexcassell.com
//set timezone for conversation
import React from 'react';

//grabs users timezone -- until default is set in preferences
let getTimeZone = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];
/* converts getTimeZone to something like GMT-0400; Chrome likes to add a seemingly 
random place within the timezone with the rest of the info */
let timeZone = getTimeZone.substring(0,8);

class TimeZones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZone : timeZone
        };
    }

    handleTimeZone(e){
        timeZone = e.target.name;
        // conversation["timeZone"] = timeZone;
        // console.log(conversation);
        this.setState({timeZone:timeZone});
    }

    render() {
        return (
            /*eslint-disable */
            <div className="conversations__timeZoneDropdown">
            <button className="conversations__dropButton">Time Zone</button>
            <div className="conversations__dropdown-content">
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
        /*eslint-enable */
        );
}
}

export default TimeZones;
export {timeZone};