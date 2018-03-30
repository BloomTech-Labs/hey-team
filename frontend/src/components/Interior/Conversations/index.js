//Alex Cassell
//http://alexcassell.com
//conversations page

import React from 'react';

// import '../../../Semantic-UI-CSS/semantic.min.css';

import '../../../css/interior.css';
import '../../../css/conversations.css';
import InsideNavigation from '../../InsideNavigation';

import Cards from './Cards';
import New from './NewConversation/index';

class ConversationsIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
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
                {/* <div className="conversations__wrapper">
                    <div className="conversation__add">
                        Add a New Conversation <br /> */}
                        {/* the above text will be the default [0] of an array */}
                        {/* <button className="conversation__addButton">+</button>
                    </div>
                </div> */}
                <New />
            </div>
        );
}
}

export default ConversationsIndex;