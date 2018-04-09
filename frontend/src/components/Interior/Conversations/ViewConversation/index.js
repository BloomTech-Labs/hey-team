//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import { Button } from 'semantic-ui-react'
import { v4 } from 'uuid';//creates unique keys

import DisplayQuestions from './DisplayQuestions.js'
import '../../../../css/conversationsView.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

class View extends React.Component {
    constructor(props) {
    super(props);
    this.state = {conversationsArrayEmpty: true};
};
render() {
    return (
            <div className="conversationsView__Wrapper">
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Participants
                    </div>
                    <div className="conversationsView__participantsCards">
                        []  []  []  []  []  []  []
                    </div>
                </div>
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Questions
                    </div>
                    <div className="conversationsView__questions">
                        <DisplayQuestions />
                    </div>
                </div>
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Schedule
                    </div>
                    <div className="conversationsView__schedule">
                        Mon - Fir at 10:00am Pacific
                    </div>
                </div>
                <div className="conversationsView__flexWrapper">
                    <div className="conversationsView__title">
                        Responses
                    </div>
                    <div className="conversationsView__cards">
                    []  []  []  []  []  []  []
                    </div>
                </div>
            </div>
    );
}
}

export default View;