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
    this.state = 
    {
        'monday': <Button name="Mon" onClick={(e) => this.handleInput(e)}>Mon</Button>,
        'tuesday': <Button name="Tue" onClick={(e) => this.handleInput(e)}>Tue</Button>,
        'wednesday': <Button name="Wed" onClick={(e) => this.handleInput(e)}>Wed</Button>,
        'thursday': <Button name="Thur" onClick={(e) => this.handleInput(e)}>Thur</Button>,
        'friday': <Button name="Fri" onClick={(e) => this.handleInput(e)}>Fri</Button>,
        'saturday': <Button name="Sat" onClick={(e) => this.handleInput(e)} color="grey">Sat</Button>,
        'sunday': <Button name="Sun" onClick={(e) => this.handleInput(e)}  color="grey">Sun</Button>
    };
}

    componentWillMount(){
        this.handleStates();
        // console.log(this.state.sunday);
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
        this.handleStates();
    }

        handleStates(){
            // console.log(daysArray);
            if(daysArray[0] === false){
                // console.log("Mon1");
                this.setState({'monday': <Button  name="Mon" onClick={(e) => this.handleInput(e)}>Mon</Button>});
            }
            else{
                this.setState({'monday': <Button color='black' name="Mon" onClick={(e) => this.handleInput(e)}>Mon</Button>});
                // console.log("Mon2");
            }

            if(daysArray[1] === false){
                this.setState({'tuesday': <Button name="Tue" onClick={(e) => this.handleInput(e)}>Tue</Button>});
            }
            else{
                this.setState({'tuesday': <Button color='black' name="Tue" onClick={(e) => this.handleInput(e)}>Tue</Button>});
            }

            if(daysArray[2] === false){
            this.setState({'wednesday': <Button name="Wed" onClick={(e) => this.handleInput(e)}>Wed</Button>});
            }
            else{
            this.setState({'wednesday': <Button color='black' name="Wed" onClick={(e) => this.handleInput(e)}>Wed</Button>});
            }

            if(daysArray[3] === false){
            this.setState({'thursday': <Button name="Thur" onClick={(e) => this.handleInput(e)}>Thur</Button>});
            }
            else{
            this.setState({'thursday': <Button color='black' name="Thur" onClick={(e) => this.handleInput(e)}>Thur</Button>});
            }

            if(daysArray[4] === false){
            this.setState({'friday': <Button name="Fri" onClick={(e) => this.handleInput(e)}>Fri</Button>});
            }
            else{
            this.setState({'friday': <Button color='black' name="Fri" onClick={(e) => this.handleInput(e)}>Fri</Button>});
            }

            if(daysArray[5] === false){
            this.setState({'saturday': <Button name="Sat" onClick={(e) => this.handleInput(e)} color="grey">Sat</Button>});
            }
            else{
            this.setState({'saturday': <Button color='black' name="Sat" onClick={(e) => this.handleInput(e)}>Sat</Button>});
                
            }
            if(daysArray[6] === false){
            this.setState({'sunday': <Button name="Sun" onClick={(e) => this.handleInput(e)} color="grey">Sun</Button>});
            }
            else{
            this.setState({'sunday': <Button color='black' name="Sun" onClick={(e) => this.handleInput(e)}>Sun</Button>});
            }
        }


    render() {
        return (
            <div className="conversations__schedule">
                <div className="conversations__scheduleTitle">Schedule</div>
                <div className="conversations__scheduleDays">
                {this.state.monday}
                {this.state.tuesday}
                {this.state.wednesday}
                {this.state.thursday}
                {this.state.friday}
                {this.state.saturday}
                {this.state.sunday}
                </div>
            </div>
        );
    }
}

export default Days;
export {daysArray};