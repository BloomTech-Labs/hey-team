//Alex Cassell
//http://alexcassell.com
//questions refactored

import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/questions.css';
import {editClicked} from '../index.js';
import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let questionsArray = ["Type a question"];
let dataArray = [];
let inputArray = [];
let i = 0;

class Questions extends React.Component {
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
        this.handleDisplayQuestions();
        if(editClicked){
            questionsArray = [];
            for(let r = 0; r < conversationsArray[conversationsArrayPosition].questions.length;r++){
                questionsArray[r] = conversationsArray[conversationsArrayPosition].questions[r]
                console.log(conversationsArray[conversationsArrayPosition].questions[r]);
            }
            console.log(questionsArray);
            i = 0;
            this.handleDisplayQuestions();
        }
    }

    handleInput(e){
        /*eslint-disable */
        //dev only this is being refactored
        console.log(e.target.name + ": " + e.target.value);
        questionsArray[parseInt(e.target.name)] = e.target.value;
        console.log(this.state.questionsArray);
        /*eslint-enable */
    }

    handleDisplayQuestions(){
        if(i < questionsArray.length){
            this.setState({displayArray:[]});
            inputArray[i] =
            <div key={v4()}><Input className="ui size input" type="text" 
            name={i} onChange={(e) => this.handleInput(e)} 
            placeholder={dataArray[[i[0]]] = questionsArray[i]}/><Button 
            name={i} onClick={(e) => this.handleDelete(e)}>-</Button></div>;
            this.setState({displayArray:inputArray});
            // console.log("i = " + i);
            i++
            // setTimeout(this.handleDisplayQuestions.bind(this), 100);
            this.handleDisplayQuestions();
        }
    }
    handleDelete(e){
        if(questionsArray.length > 1){
            console.log("Name: " + e.currentTarget.name);
            console.log(questionsArray);
            questionsArray.splice((parseInt(e.currentTarget.name)), 1);
            i = 0;
            inputArray = [];
            this.handleDisplayQuestions();
            console.log(questionsArray);
        }
    }

    handleCreateInput(){
        console.log(questionsArray);
        questionsArray.push("Type a question");
        i = 0;
        inputArray = [];
        this.handleDisplayQuestions();
        console.log(questionsArray);
    }
    
    render() {
    return (
        <div className="questionsWrapper">
            {this.state.displayArray}
            <Button className="questions__button" onClick={() => this.handleCreateInput()}>Add Question</Button>
        </div>

    );
}
}

export default Questions;