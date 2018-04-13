//Alex Cassell
//http://alexcassell.com
//display questions in view conversation mode

import React from 'react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/questions.css';
// import {editClicked} from '../index.js';
import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let questionsArray = ["Type a question"];
let dataArray = [];
let inputArray = [];

class DisplayQuestions extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            questionCount: 0,
            questionsArray: [],
            displayArray: []
        };
    }

    componentDidMount(){
        for(let r = 0; r < conversationsArray[conversationsArrayPosition].questions.length;r++){
            questionsArray[r] = conversationsArray[conversationsArrayPosition].questions[r]
            }
        this.handleDisplayQuestions();
    }


    handleDisplayQuestions(){
        for(let i = 0; i < questionsArray.length; i++){
            this.setState({displayArray:[]});
            inputArray[i] =
            <div key={v4()} name={i}
            >{dataArray[[i[0]]] = questionsArray[i]}</div>;
            this.setState({displayArray:inputArray});
        }
    }

    render() {
    return (
        <div className="questionsWrapper">
            {this.state.displayArray}
        </div>

    );
}
}

export default DisplayQuestions;