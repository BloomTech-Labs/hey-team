//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import axios from 'axios';

import { getAllConversations} from '../../../Actions/GetAllConversations';
import {createNewConversation} from '../../../Actions/CreateNewConversation';

import DisplayQuestions from './DisplayQuestions.js';
import Schedule from './Schedule.js';
import Responses from './Responses.js';
import Participants from '../NewConversation/Participants.js';

// import ConversationsIndex from '../index.js'

// import {editClicked} from '../index.js';
import {conversationsArray} from '../index.js'
// import {conversationsArrayPosition} from '../index.js';

import '../../../../css/conversationsView.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

class View extends React.Component {
    constructor(props) {
    super(props);
    this.state = {somestate: true};

    // this.createNewConversation = this.createNewConversation.bind(this);
}

componentWillMount(){
    this.handleUserSearch();
}

createNewConversation() {//e
    // e.preventDefault();
    this.props.createNewConversation(this.state);
    this.setState(conversationsArray[0]);
}


handleUserSearch = async e => {
    const users = await getAllConversations("a");
    this.setState({ searchResults: users.data });
    console.log(this.state.searchResults);

    // console.log(this.state.searchResults);//entire group
};

handleEdit(){
    this.props.history.push('/conversations/edit');   
}

    callDelete(e){
        conversationsArray.splice(e.currentTarget.name, 1);
        this.props.history.push('/conversations/');
    }

render() {
    // <ConversationsIndex buttonClick={(e) => this.handleEdit(this)} />
    return (
            <div className="conversationsView__Wrapper">
            <div className="conversationsViewButtons"><button name="notfinished" className="right floated" onClick={() => this.handleEdit()}><i className="edit icon"></i></button><button name="notfinished" className="right floated" onClick={(e) => this.callDelete(e)}><i className="trash icon"></i></button></div>
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