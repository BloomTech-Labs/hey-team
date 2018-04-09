//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import { Button } from 'semantic-ui-react'
import { v4 } from 'uuid';//creates unique keys

import '../../../css/conversations.css';
import '../../../css/cards.css';
import '../../../Semantic-UI-CSS/semantic.min.css';


// import New from './NewConversation/index';
let dataArray =[];
let i = 1;
// dummy info//will fill in from server//all conversation data will be saved here more properties than shown
let conversationsArray =    [
                                {name:"Stand Up CS3", time: "12:20 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018", timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS4", time: "11:00 AM",schedule:"Wed", created:"11th of July 2018",timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS5", time: "12:15 AM",schedule:"Tues, Fri", created:"12th of Bradbury 2018", timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS6", time: "07:00 PM",schedule:"Thur, Tues, Fri", created:"21st of January 2018", timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS7", time: "10:05 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018",timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS8", time: "11:22 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018",timeZone:"loaded time zone", post:"channel Zero", questions:["some silly question", "some sillier question", "a question that makes sense"]},
                                {name:"Stand Up CS9", time: "12:00 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS10", time: "03:20 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS11", time: "12:15 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS12", time: "08:05 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS13", time: "10:05 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS3", time: "10:00 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS4", time: "11:00 AM",schedule:"Wed", created:"11th of July 2018"},
                                {name:"Stand Up CS5", time: "12:15 AM",schedule:"Tues, Fri", created:"12th of Bradbury 2018"},
                                {name:"Stand Up CS6", time: "07:00 PM",schedule:"Thur, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS7", time: "10:05 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS8", time: "11:22 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS9", time: "12:00 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS10", time: "03:20 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS11", time: "12:15 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS12", time: "08:05 AM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"},
                                {name:"Stand Up CS13", time: "10:05 PM",schedule:"Mon, Tues, Fri", created:"21st of January 2018"}
                            ];

let endCard;
let cardArray = [];
let conversationsArrayPosition = 0;//exported variable that keeps track of which conversation is to be opened for edit.
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
        // console.log(conversationsArray);
        //load data from the server fill in conversationsArray with objects
        //full of the conversation's data
        if(conversationsArray[0] !== undefined){
            this.setState({conversationsArrayEmpty: false});
        }
        else{
            this.setState({conversationsArrayEmpty: true});
        }
        // this.setState({conversationsArrayEmpty: true}); //this is dev only
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
    handleDisplayCards(){
        if(i < conversationsArray.length){
            this.setState({displayArray:[]});
            cardArray[0] = endCard;
            cardArray[i] =
            <div key={v4()} className="cardWrap"><div className="ui card"><div className="content"><button name={i} className="right floated" onClick={(e) => this.handleEdit(e)}><i className="edit icon"></i></button><button name={i} className="right floated" onClick={(e) => this.handleDelete(e)}><i className="trash icon"></i></button><div className="card__header">
            {dataArray[[i[0]]] = conversationsArray[i].name}</div><div className="description"><div className="cards__time"><span className="cards__titles">Time: </span>
            {dataArray[[i[1]]] = conversationsArray[i].time}</div><div className="cards__schedule"><span className="cards__titles">Schedule: </span>
            {dataArray[[i[2]]] = conversationsArray[i].schedule}</div><div className="cards__created"><span className="cards__titles">Created: </span>
            {dataArray[[i[3]]] = conversationsArray[i].created}</div></div></div></div></div>;
            this.setState({displayArray:cardArray});
            i++
            // setTimeout(this.handleDisplayCards.bind(this), 100);
            this.handleDisplayCards();
        }
    }


    /*
        set card to read from current array object
        loop through each object
        set to new state array


        peice jsx together
        save each data point into an array, fills in next slot
        */

    handleNewConversationButton(){
        editClicked = false;
        this.props.history.push('/conversations/new');
        console.log("here");
    }

    handleEdit(e){
        console.log(e.currentTarget.name);
        editClicked = true;
        conversationsArrayPosition = e.currentTarget.name;
        this.props.history.push('/conversations/edit');
        
    }

    handleDelete(e){
        console.log(e.currentTarget.name);
        console.log(conversationsArray);
        conversationsArray.splice(e.currentTarget.name, 1);
        i = 1;
        cardArray = [];
        this.handleDisplayCards();
        console.log(conversationsArray);
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
                    {button}
                </div>
        );
    }
}

export default ConversationsIndex;
export {conversationsArray};
export {conversationsArrayPosition};
export {editClicked};