//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';

// import '../../../Semantic-UI-CSS/semantic.min.css';

import '../../../css/interior.css';
import '../../../css/conversations.css';

// import Cards from './Cards';
// import New from './NewConversation/index';



let conversationsArray;

class ConversationsIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {conversationsArrayEmpty: true};
    }

    componentDidMount(){
        console.log(conversationsArray);
        //load data from the server fill in conversationsArray with objects
        //full of the conversation's data
        if(conversationsArray !== undefined){
            this.setState({conversationsArrayEmpty: false});
        }

    }

    handleNewConversationButton(){
        this.props.history.push('/conversations/new');
        console.log("here");
    }

    render() {
        const conversationsArrayEmpty = this.state.conversationsArrayEmpty;
        const button = conversationsArrayEmpty ? (
            <div className="conversation__add">Add a New Conversation <br />
            <button onClick={() => this.handleNewConversationButton()} className="conversation__addButton">+</button>
            </div>
        ) : (
            <div>
                Downloaded data from server<br />
                array of objects
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