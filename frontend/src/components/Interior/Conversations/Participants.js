//Alex Cassell
//http://alexcassell.com
//participants reusuable component

import React from 'react';
import { Button } from 'semantic-ui-react'
import { v4 } from 'uuid';//creates unique keys

import '../../../css/conversationsParticipants.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

import {conversationsArray} from './index.js'
import {conversationsArrayPosition} from './index.js';

let cardArray = [];
let dataArray = [];

class Participants extends React.Component {
    constructor(props) {
    super(props);
    this.state = {somestate: true};
    }

    componentWillMount(){
        this.handleDisplayCards();
    }
//saves conversation object data into an array

//once connected to backend this will draw for main object array
handleDisplayCards(){
    for(let i = 0; i < conversationsArray.length; ++i){
        this.setState({displayArray:[]});
        cardArray[i] =
        <div key={v4()} className="participants__userImage"><button name={i} className="right floated" onClick={(e) => this.handleDelete(e)}><i className="trash icon"></i></button></div>;
        this.setState({displayArray:cardArray});
    }
}


handleDelete(e){
    console.log(e.currentTarget.name);
    console.log(conversationsArray);
    conversationsArray.splice(e.currentTarget.name, 1);
    cardArray = [];
    this.handleDisplayCards();
    console.log(conversationsArray);
}



    render() {
        return(
            <div className="participants__flexWrapper">
                {this.state.displayArray}
            </div>

        );
    }
}

export default Participants;
