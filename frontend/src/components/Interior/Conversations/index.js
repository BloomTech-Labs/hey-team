//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import Card, { Button } from 'semantic-ui-react'
import { v4 } from 'uuid';//creates unique keys

import '../../../css/conversations.css';
import '../../../css/cards.css';


// import New from './NewConversation/index';
let dataArray =[];
let i = 0;
// dummy info//will fill in from server//all conversation data will be saved here more properties than shown
let conversationsArray =    [
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

let endCard = <div key={v4()} className="cardWrap"><div className="ui card"><div className="card__header">Add New Conversation</div></div></div>;
let cardArray = []

class ConversationsIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {conversationsArrayEmpty: true};
    this.state = {displayArray:cardArray};
    }

    componentDidMount(){
        // console.log(conversationsArray);
        //load data from the server fill in conversationsArray with objects
        //full of the conversation's data
        if(conversationsArray !== undefined){
            this.setState({conversationsArrayEmpty: false});
        }

        this.handleDisplayCards();
    }
//saves conversation object data into an array// displayed in its place with in the jsx card
    handleDisplayCards(){
        if(i < conversationsArray.length){
            this.setState({displayArray:[]});
            cardArray[i] =
            <div key={v4()} className="cardWrap"><div className="ui card"><div className="content"><button name={i} className="right floated" onClick={(e) => this.handleEdit(e)}><i className="edit icon"></i></button><button name={i} className="right floated" onClick={(e) => this.handleDelete(e)}><i className="trash icon"></i></button><div className="card__header">
            {dataArray[[i[0]]] = conversationsArray[i].name}</div><div className="description"><div className="cards__time"><span className="cards__titles">Time: </span>
            {dataArray[[i[1]]] = conversationsArray[i].time}</div><div className="cards__schedule"><span className="cards__titles">Schedule: </span>
            {dataArray[[i[2]]] = conversationsArray[i].schedule}</div><div className="cards__created"><span className="cards__titles">Created: </span>
            {dataArray[[i[3]]] = conversationsArray[i].created}</div></div></div></div></div>;

            cardArray.push(endCard);
            this.setState({displayArray:cardArray});
            setTimeout(this.handleDisplayCards.bind(this), 100);
            i++
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
        this.props.history.push('/conversations/new');
        console.log("here");
    }

    handleEdit(e){
        console.log(e.currentTarget.name);
    }

    handleDelete(e){
        console.log(e.currentTarget.name);
        console.log(conversationsArray);
        conversationsArray.splice(((e.currentTarget.name)), 1);
        i = 0;
        cardArray = [];
        this.handleDisplayCards();
        console.log(conversationsArray);
    }

    render() {
        // const conversationsArrayEmpty = this.state.conversationsArrayEmpty;
        // const button = conversationsArrayEmpty ? (
        //     <div className="conversation__add">Add a New Conversation <br />
        //     <button onClick={() => this.handleNewConversationButton()} className="conversation__addButton">+</button>
        //     </div>
        // ) : (
        //     <div>
        //         Downloaded data from server<br />
        //         array of objects
        //     </div>
        // );
        return (
                <div className="conversations__wrapper">
                     {/* {button}
                 </div> */}
                <div className="cards__flexWrapper">
                    {this.state.displayArray}
                </div>
            </div>
        );
    }
}

export default ConversationsIndex;