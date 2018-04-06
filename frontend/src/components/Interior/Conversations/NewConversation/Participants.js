//Alex Cassell
//http://alexcassell.com
//participants


//this will be figured out once I can see data from slack

import React from 'react';
'../../../Semantic-UI-CSS/semantic.min.css';

import '../../../css/interior.css';

let participant  = {name:"", id:"", handle:"", timeZone:""};

let participantCard = <div class="ui link cards">
                        <div class="card">
                            <div class="image">
                                <img src="./images/matthew.png"/>
                            </div>
                        <div class="content">
                            <div class="header">{participant.name}</div>
                            <div class="meta">
                            <a>Friends</a>
                            </div>
                            <div class="description">
                                Matthew is an interior designer living in New York.
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                            Joined in 2013
                            </span>
                            <span>
                            <i class="user icon"></i>
                            75 Friends
                            </span>
                        </div>
                        </div>
</div>

class Participants extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'somestate': ''};
    }
    render() {
        return (
            <div>
            {participantCard}
            </div>
        );
}
}

export default Participants;