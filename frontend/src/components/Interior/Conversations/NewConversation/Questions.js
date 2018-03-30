//Alex Cassell
//http://alexcassell.com

import React from 'react';
import { Input } from 'semantic-ui-react';

let questionSecondary = <Input className="ui size input" type="text" name="question" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/>;

let question = <div><Input className="ui size input" type="text" name="question" onChange={(e) => this.handleInput(e)} placeholder="Type a question"/><button className="conversations__buttonAdd"  onClick={(e) => this.handleAddingQuestions(e)}><i className="fa fa-plus-circle fa-2x"></i></button></div>;

class Questions extends React.Component {
    constructor(props) {
    super(props);
    this.state = {questions: [question, questionSecondary, questionSecondary]};
    }
    
    handleAddingQuestions(){
        // this.setState({questions:});
    }

    render() {
        return (
            <div className="conversations__questions">
                <div className="conversations__title">
                Questions
            </div>
            <div className="conversations__questionsWrapper">
                <div className="conversations__questionsStateWrapper">
                    {this.state.questions}
                </div>
            </div>           
            <button className="conversations__button__questionsSave">Save Questions</button>
        </div>
        );
    }
}

export default Questions;