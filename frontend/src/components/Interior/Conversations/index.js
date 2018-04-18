//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { v4 } from 'uuid';//creates unique keys

import { getAllConversations} from '../../Actions/GetAllConversations';

import '../../../css/conversations.css';
import '../../../css/cards.css';



// import New from './NewConversation/index';
let dataArray =[];
let conversationsArrayPosition = 0;//exported variable that keeps track of which conversation is to be opened for edit.

// dummy info//will fill in from server//all conversation data will be saved here more properties than shown
let conversationsArray = [];

let endCard;
let cardArray = [];
let editClicked = false; //dev only will be false

class ConversationsIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {conversationsArrayEmpty: true};
    this.state = {displayArray:cardArray};
    this.state = {areYouSure:
        <div>
            <div className="conversations__greyedOut"/>
            <div className="conversations__areYouSure">
                <div className="conversations__areYouSureTitle">
                    Are you sure?
                </div>
                <div className="conversations__areYouSureButtonWrapper">
                <Button color='green' onClick={(e) => this.handleEdit(e)}>No</Button><Button color='red'>Yes</Button>
                </div>
            </div>
        </div>
        };
    }

    componentWillMount(){
        editClicked = false;
        this.handleLoadConversations();
        // console.log(editClicked);
        // this.handleSubmit();

        //card has to be declared here so that the onclick will work properly
        endCard = 
                <div key={v4()} className="cardWrap">
                    <div className="ui card" onClick={() => this.handleNewConversationButton()}>
                        <div className="converations__createNew">
                            <div className="converations__createNew__header">
                                Add New Conversation
                            </div>
                            <i className="converations__createNew__icon plus circle icon fa-5"></i>
                        </div>
                    </div>
                </div>
        this.handleDisplayCards();
    }
//saves conversation object data into an array


    // handleSubmit = async e => {
    //     // event.preventDefault();
    //     console.log("submit");
    //     const conversationAdd = {
    //         w_id: '5ad4cebecb2cb341f09211ee',
    //         c: conversationsArray[0]
    //         };
    //         console.log("submitted");
    //         axios.post(`https://ab5a9f15.ngrok.io/conversation/create`,  conversationAdd)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    //     }
    // 

    handleLoadConversations = async e => {
        const users = await getAllConversations("a");
        this.setState({ searchResults: users.data });
        console.log(this.state.searchResults);
        // console.log(this.state.searchResults[0]);
        conversationsArray = [];
        for(let a = 0; a < this.state.searchResults.length; a++){
            conversationsArray[a] = {
                title: this.state.searchResults[a].title,
                members: this.state.searchResults[a].members,
                questions: this.state.searchResults[a].questions,
                responses: this.state.searchResults[a].responses,
                // schedule: {
                //     modifier: this.state.searchResults[a].schedule.modifier,
                //     tz: this.state.searchResults[a].schedule.tz,
                //     time: this.state.searchResults[a].schedule.time,
                //     modifier: this.state.searchResults[a].schedule.modifier
                // },
            }
        }
        if(conversationsArray[0] !== undefined){
            this.setState({conversationsArrayEmpty: false});
            this.handleDisplayCards();
        }
        else{
            this.setState({conversationsArrayEmpty: true});
        }
        // console.log(conversationsArray);
        this.setState({ searchResults: this.state.searchResults });

    // console.log(this.state.searchResults);//entire group
};

    handleDisplayCards(){
        cardArray = [];
        // console.log(cardArray);
        for(let i = 0; i < conversationsArray.length; i++){
            this.setState({displayArray:[]});
            cardArray[i] =
            <div key={v4()} className="cardWrap"><div className="ui card"><div className="content"><button name={i} className="right floated" onClick={(e) => this.handleView(e)}><i className="folder open icon"></i></button><button name={i} className="right floated" onClick={(e) => this.handleEdit(e)}><i className="edit icon"></i></button><button name={i} className="right floated" onClick={(e) => this.handleDelete(e)}><i className="trash icon"></i></button><div className="card__header">
            {dataArray[[i[0]]] = conversationsArray[i].title}</div><div className="description"><div className="cards__time"><span className="cards__titles">Time: </span>
            {dataArray[[i[1]]] = conversationsArray[i].time}</div><div className="cards__schedule"><span className="cards__titles">Schedule: </span>
            {dataArray[[i[2]]] = conversationsArray[i].schedule}</div><div className="cards__created"><span className="cards__titles">Created: </span>
            {dataArray[[i[3]]] = conversationsArray[i].created}</div></div></div></div></div>;
            this.setState({displayArray:cardArray});
        }
        // console.log(cardArray);
        cardArray.unshift(endCard);
        
    }

    handleNewConversationButton(){
        editClicked = false;
        this.props.history.push('/conversations/new');
    }

    handleEdit(e){
        editClicked = true;
        conversationsArrayPosition = e.currentTarget.name;
        this.props.history.push('/conversations/edit');
        console.log("Edit");        
    }

    handleView(e){
        editClicked = true;
        conversationsArrayPosition = e.currentTarget.name;
        this.props.history.push('/conversations/view');
    }

    handleDelete(e){
        conversationsArray.splice(e.currentTarget.name, 1);
        cardArray = [];
        this.handleDisplayCards();
    }

    handleDeleteYes(e){

    }

    render() {
        const conversationsArrayEmpty = this.state.conversationsArrayEmpty;
        const button = conversationsArrayEmpty ? (
            <div className="conversation__add">Add a new Conversation <br />
            <button onClick={() => this.handleNewConversationButton()} className="conversation__addButton"><i className="plus circle icon"></i></button>
            </div>
        ) : (
            <div className="cards__flexWrapper">
                {this.state.displayArray}
                {/* {this.state.areYouSure} */}
            </div>
        );
        return (
                <div className="conversations__wrapper">
                    <div className="conversations__scroll">
                    {button}
                    </div>
                </div>
        );
    }
}

export default ConversationsIndex;
export {conversationsArray};
export {conversationsArrayPosition};
export {editClicked};