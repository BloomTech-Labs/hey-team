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
    
    will refactor after mvp showing on friday
*/

import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/questions.css';

class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            questionCount: 0,
            questionsArray: [],
            inputArray: [
                        <div key={v4()}><Input className="ui size input" type="text" name="1" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="1" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="2" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="2" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="3" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="3" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="4" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="4" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="5" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="5" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="6" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="1" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="7" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="7" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="8" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="8" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="9" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="9" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        <div key={v4()}><Input className="ui size input" type="text" name="10" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><Button name="10" onClick={(e) => this.handleDelete(e)}>-</Button></div>,
                        ]
        };
    }

    handleInput(e){
        console.log(e.target.name + ": " + e.target.value);
        this.state.questionsArray[parseInt(e.target.name) - 1] = e.target.value;
        console.log(this.state.questionsArray);
    }

    handleDelete(e){  
        //removes corresponding question from the questionsArray state
        this.setState({questionsArray: this.state.questionsArray.splice(((parseInt(e.target.name) - 1)), 1)});

        console.log(this.state.questionsArray);
        this.state.questionCount --
    }

    handleCreateInput(){
        if(this.state.questionCount === 0){
            this.setState({questions: [this.state.inputArray[0]]});
        }
        else if(this.state.questionCount === 1){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1]]});
        }
        else if(this.state.questionCount === 2){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2]]});
        }
        else if(this.state.questionCount === 3){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3]]});
        }
        else if(this.state.questionCount === 4){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4]]});
        }
        else if(this.state.questionCount === 5){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5]]});
        }
        else if(this.state.questionCount === 6){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5], this.state.inputArray[6]]});
        }
        else if(this.state.questionCount === 7){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5], this.state.inputArray[6],
                this.state.inputArray[7]]});
        }
        else if(this.state.questionCount === 8){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5], this.state.inputArray[6],
                this.state.inputArray[7], this.state.inputArray[8]]});
        }
        else if(this.state.questionCount === 9){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5], this.state.inputArray[6],
                this.state.inputArray[7], this.state.inputArray[8], this.state.inputArray[9]]});
        }
        else if(this.state.questionCount === 10){
            this.setState({questions: [this.state.inputArray[0], this.state.inputArray[1], this.state.inputArray[2], 
                this.state.inputArray[3], this.state.inputArray[4], this.state.inputArray[5], this.state.inputArray[6],
                this.state.inputArray[7], this.state.inputArray[8], this.state.inputArray[9], this.state.inputArray[10]]});
        }

        if(this.state.questionCount !== 10){
            this.state.questionCount ++
        }
    }
    
    render() {
    return (
        <div className="questionsWrapper">
            {this.state.questions}
            <Button className="questions__button" onClick={() => this.handleCreateInput()}>Add Question</Button>
        </div>

    );
}
}

export default Questions;