//Alex Cassell
//http://alexcassell.com
//questions simplified

/*
    when a question is deleted the form goes away
    X the question is deleted from the array
    and the array is collasped - each question
    is moved to fill in space
    then refill all input forms
    share questionsArray state via props

    loop through array and set values of input fields ez pz

    will refactor after mvp showing on friday
*/

import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/questions.css';

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
    }

    handleInput(e){
        /*eslint-disable */
        //dev only this is being refactored
        console.log(e.target.name + ": " + e.target.value);
        this.state.questionsArray[parseInt(e.target.name) - 1] = e.target.value;
        console.log(this.state.questionsArray);
        /*eslint-enable */
    }

    handleDisplayQuestions(){
        console.log("out");
        if(i < questionsArray.length){
            console.log("in");
            this.setState({displayArray:[]});
            inputArray[i] =
            <div key={v4()}><Input className="ui size input" type="text" 
            name={dataArray[[i[0]]] = questionsArray[i]} onChange={(e) => this.handleInput(e)} 
            placeholder={dataArray[[i[0]]] = questionsArray[i]}/><Button 
            name={dataArray[[i[0]]] = questionsArray[i]} onClick={(e) => this.handleDelete(e)}>-</Button></div>;
            this.setState({displayArray:inputArray});
            i++
            // setTimeout(this.handleDisplayQuestions.bind(this), 100);
            this.handleDisplayQuestions();
        }
    }
    handleDelete(e){
        if(questionsArray.length > 1){
            console.log(e.currentTarget.name);
            console.log(questionsArray);
            questionsArray.splice(e.currentTarget.name, 1);
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