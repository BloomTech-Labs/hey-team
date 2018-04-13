//Alex Cassell
//http://alexcassell.com
//participants reusuable component

import React from 'react';
import axios from 'axios';
import { v4 } from 'uuid';//creates unique keys
import { Input, Button } from 'semantic-ui-react';

import '../../../css/conversationsParticipants.css';

import {conversationsArray} from './index.js'
import {conversationsArrayPosition} from './index.js';

let cardArray = [];
let postWhere;

class Participants extends React.Component {
    constructor(props) {
    super(props);
    this.state = {SearchResults: []};
    }

    componentWillMount(){
        // this.handleDisplayCards();
    }

    handleSearch(e) {
        // console.log(localStorage);
        const thing = {};
        const test = async () => {
          const res = await axios.post('https://3259afd8.ngrok.io/users/find', {
            a_id: '5ace2f3b4fe2223b887ec9f9',
            searchTerm: e.target.value,
          });
          //   console.log(res);
          const SearchResults = [];
          res.data.forEach(p => {
            SearchResults.push({
              name: p.real_name,
              user_id: p.user_id,
              avatar: p.avatar,
            });
          });
          this.setState({ SearchResults });
        };
    
        test();
        console.log(this.state.SearchResults);
        if(this.state.SearchResults.length > 0){
            this.handleDisplayCards();
        }
    }
//saves conversation object data into an array

//once connected to backend this will draw for main object array
handleDisplayCards(){
    for(let i = 0; i < this.state.SearchResults.length; ++i){
        this.setState({displayArray:[]});
        cardArray[i] =
        <div key={v4()} className="participants__userImage"><img src={this.state.SearchResults[i].avatar} alt="User Photo" /></div>;
    }
    this.setState({displayArray:cardArray});
}


handleDelete(e){
    conversationsArray[conversationsArrayPosition].participants[0].splice(e.currentTarget.name, 1);
    cardArray = [];
    this.handleDisplayCards();
}



    render() {
        return(
            <div className="participants__flexWrapper">
            <div className="conversations__participant">
              {/* this has to hook into the backend */}
                <Input
                    icon="search"
                    className="ui size input small"
                    type="text"
                    name="search"
                    placeholder="Search"
                    onChange={e => this.handleSearch(e)}
                    placeholder={postWhere}
                />
            </div>
            {this.state.displayArray}
            </div>

        );
    }
}

export default Participants;
