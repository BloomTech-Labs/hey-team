//Alex Cassell
//http://alexcassell.com
//conversations page

import React from 'react';

// import '../../../Semantic-UI-CSS/semantic.min.css';

import '../../../css/interior.css';
import '../../../css/conversations.css';
import InsideNavigation from '../../InsideNavigation';

// import Cards from './Cards';
import New from './NewConversation/index';

class ConversationsIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }

    handleNewConversationButton(){
        this.props.history.push('/conversations/new');
        console.log("here");
    }

    render() {
        return (
            <div className="interior__wrapper">
                <div className="interior__header">
                    <div className="logo"/>
                    <div className="interior__title">
                        Conversations
                    </div>
                    <div className="interior__signOut"/>
                </div>
                <InsideNavigation />{/*Side menu */}

                {/* Below will be handled by states*/}
                <div className="conversations__wrapper">
                    <div className="conversation__add">
                        Add a New Conversation <br />
                        {/* the above text will be the default [0] of an array */}
                        <button onClick={() => this.handleNewConversationButton()} className="conversation__addButton">+</button>
                        {/* Instead of using router I am going to change the state of this component to show the new.js component
                        when the user clicks new. */}
                    </div>
                </div>
            </div>
        );
}
}

export default ConversationsIndex;