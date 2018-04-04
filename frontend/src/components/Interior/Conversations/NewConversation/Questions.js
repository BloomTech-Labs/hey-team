//Alex Cassell
//http://alexcassell.com
//questions

/* this component will likely have to be re writtem
    deleteing data is problematic
    if you hit add question before filling out the form
    it does not save the questions 
    trying to add a unique key breaks it

    I will probably hard code it to accept like 15 questions
    that would simplify the entire thing

    possible fixes.. grey out add question button
    until a question has been filled in
*/

import React from 'react';
import { Input } from 'semantic-ui-react';
import { v4 } from 'uuid';//creates unique keys

let questionName = 0;
let questionsArray =[];

class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            questions: [{ name: '' }],
    };
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleQuestionNameChange = (idx) => (evt) => {
    const newquestions = this.state.questions.map((question, sidx) => {
        if (idx !== sidx) return question;
        this.handleInput(evt);
        return { ...question, name: evt.target.value };

    });

        this.setState({ questions: newquestions });
    }

    handleSubmit = (evt) => {
        const { name, questions } = this.state;
    }

    handleAddQuestion = () => {
        questionName += 1; 
        this.setState({ questions: this.state.questions.concat([{ name: '' }]) });
    }

    handleRemoveQuestion = (idx) => (evt) => {
        this.setState({ questions: this.state.questions.filter((s, sidx) => idx !== sidx) });
    }

    handleInput(evt){
        questionsArray[questionName] = evt.target.value;
        // console.log(questionsArray);
    }


    render() {
    return (
        <form className="conversations__questions" onSubmit={this.handleSubmit}>
        Questions

        {this.state.questions.map((question, idx) => (
            <div className="question">
            <Input
                type="text"
                placeholder={`Type a question`}
                value={question.name}
                name = {String(questionName)}
                onChange={this.handleQuestionNameChange(idx) }
                // onChange={(e) => this.handleInput(e)}
            />
            {/* <button type="button" onClick={this.handleRemoveQuestion(idx)} className="small">-</button> */}
            </div>
        ))}
        <button type="button" onClick={this.handleAddQuestion} className="small">Add Question</button>
        </form>
    )
    }
}

export default Questions;
export {questionsArray};