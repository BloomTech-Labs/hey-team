//Alex Cassell
//http://alexcassell.com
//set days of the week for conversation

import React from 'react';

import { Button } from 'semantic-ui-react';

                //days array starts with Monday; true for message scheduled for that day
let daysArray=[false, false, false, false, false, false, false];


class Days extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }

    handleInput(e){
        if (e.target.name === "Mon"){
            if(daysArray[0] === false){
                daysArray[0] = true;
            }
            else{
                daysArray[0] = false;
            }
        }
        else if (e.target.name === "Tue"){
            if(daysArray[1] === false){
                daysArray[1] = true;
            }
            else{
                daysArray[1] = false;
            }
        }
        else if (e.target.name === "Wed"){
            if(daysArray[2] === false){
                daysArray[2] = true;
            }
            else{
                daysArray[2] = false;
            }
        }
        else if (e.target.name === "Thur"){
            if(daysArray[3] === false){
                daysArray[3] = true;
            }
            else{
                daysArray[3] = false;
            }
        }
        else if (e.target.name === "Fri"){
            if(daysArray[4] === false){
                daysArray[4] = true;
            }
            else{
                daysArray[4] = false;
            }
        }
        else if (e.target.name === "Sat"){
            if(daysArray[5] === false){
                daysArray[5] = true;
            }
            else{
                daysArray[5] = false;
            }
        }
        else if (e.target.name === "Sun"){
            if(daysArray[6] === false){
                daysArray[6] = true;
            }
            else{
                daysArray[6] = false;
            }
        }

        // console.log(daysArray);
    }

    render() {
        return (
            <div className="conversations__schedule">
                <Button name="Mon" onClick={(e) => this.handleInput(e)} basic>Mon</Button>
                <Button name="Tue" onClick={(e) => this.handleInput(e)} basic>Tue</Button>
                <Button name="Wed" onClick={(e) => this.handleInput(e)} basic>Wed</Button>
                <Button name="Thur" onClick={(e) => this.handleInput(e)} basic>Thur</Button>
                <Button name="Fri" onClick={(e) => this.handleInput(e)} basic>Fri</Button>
                <Button name="Sat" onClick={(e) => this.handleInput(e)} color="grey">Sat</Button>
                <Button name="Sun" onClick={(e) => this.handleInput(e)} color="grey">Sun</Button>
            </div>
        );
    }
}

export default Days;
export {daysArray};