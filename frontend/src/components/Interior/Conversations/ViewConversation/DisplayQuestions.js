//Alex Cassell
//http://alexcassell.com
//questions refactored

import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/questions.css';
// import {editClicked} from '../index.js';
import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let questionsArray = ["Type a question"];
let dataArray = [];
let inputArray = [];
let i = 0;

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

    componentWillMount(){
        for(let r = 0; r < conversationsArray[conversationsArrayPosition].questions.length;r++){
            questionsArray[r] = conversationsArray[conversationsArrayPosition].questions[r]
            console.log(conversationsArray[conversationsArrayPosition].questions[r]);
            }

            console.log(questionsArray);
        this.handleDisplayQuestions();
    }


    handleDisplayQuestions(){
        if(i < questionsArray.length){
            this.setState({displayArray:[]});
            inputArray[i] =
            <div key={v4()} name={i}
            >{dataArray[[i[0]]] = questionsArray[i]}</div>;
            this.setState({displayArray:inputArray});
            i++
            // setTimeout(this.handleDisplayQuestions.bind(this), 100);
            this.handleDisplayQuestions();
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