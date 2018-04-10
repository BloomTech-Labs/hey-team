//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';

import DisplayQuestions from './DisplayQuestions.js';
import Schedule from './Schedule.js';
import Responses from './Responses.js';
import Participants from '../Participants.js';

import '../../../../css/conversationsView.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

class View extends React.Component {
    constructor(props) {
    super(props);
    this.state = {somestate: true};
};
render() {
    return (
            <div className="conversationsView__Wrapper">
            <div className="conversationsViewButtons"><button name="notfinished" className="right floated" onClick={(e) => this.handleEdit(e)}><i className="edit icon"></i></button><button name="notfinished" className="right floated" onClick={(e) => this.handleDelete(e)}><i className="trash icon"></i></button></div>
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Participants
                    </div>
                    <div className="conversationsView__participantsCards">
                        <Participants />
                    </div>
                </div>
                <div className="conversationsView__flexWrapper conversationsView__titleQuestions">
                    <div className="conversationsView__title">
                        Questions
                    </div>
                    <div className="conversationsView__questions">
                        <DisplayQuestions />
                    </div>
                </div>
                <div className="conversationsView__flexWrapper conversationsView__titleQuestions">
                    <div className="conversationsView__title">
                        Schedule
                    </div>
                    <div className="conversationsView__schedule">
                        <Schedule />
                    </div>
                </div>
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Responses
                    </div>
                    <div className="conversationsView__cards">
                        <Responses />
                    </div>
                </div>
            </div>
    );
}
}

export default View;