//Alex Cassell
//http://alexcassell.com
//members reusuable component

import React from 'react';
import axios from 'axios';
import { v4 } from 'uuid';//creates unique keys
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
    Label,
    Container,
    Checkbox,
    Input,
    List,
    Radio,
    Select,
    TextArea,
    Dropdown,
    FormGroup,
    Search,
    Icon,
    Accordion,
    Popup,
  } from 'semantic-ui-react';

import '../../../../css/conversationsParticipants.css';
import { findUsers } from '../../../Actions/FindUsers';
import {conversationsArray} from '../index.js'
import {editClicked} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let cardArray = [];
let postWhere;

let membersInfoObjectsArray = [];

class Participants extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        SearchResults: [],
        members: []
    };
    this.handleUserSearch = this.handleUserSearch.bind(this);
    }

    componentWillMount(){
        if(editClicked){
            this.handleEditSearch();
        }
    }

    handleEditSearch() {//autofill
            // const users = await findUsers(membersArray[i]);
            // this.setState({ searchResults: users.data });
            // console.log(this.state.searchResults);
            // this.state.members.push();
            console.log(conversationsArrayPosition);

            for(let j = 0; j < conversationsArray[conversationsArrayPosition].members.length; j++){
                //console.log(j + " " + conversationsArray[conversationsArrayPosition].members[j].realName);
                // console.log(j + " " + conversationsArray[conversationsArrayPosition].members[j].image);
                    this.state.members.push(
                        <Label key={v4()} size="large">
                        <img src={conversationsArray[conversationsArrayPosition].members[j].image} /> 
                        {`     ${conversationsArray[conversationsArrayPosition].members[j].realName}     `}
                        <Icon name="delete" />
                    </Label>
                    );
            }
            this.setState({ members: this.state.members });

            console.log(this.state.members);
        // console.log("edit search: " + membersArray);
    };

    // handleSearch(e) {
    //     // console.log(localStorage);
    //     const thing = {};
    //     const test = async () => {
    //       const res = await axios.post('https://3259afd8.ngrok.io/users/find', {
    //         a_id: '5ace2f3b4fe2223b887ec9f9',
    //         searchTerm: e.target.value,
    //       });
    //       //   console.log(res);
    //       const SearchResults = [];
    //       res.data.forEach(p => {
    //         SearchResults.push({
    //           name: p.real_name,
    //           user_id: p.user_id,
    //           avatar: p.avatar,
    //         });
    //       });
    //       this.setState({ SearchResults });
    //     };
    
    //     test();
    //     console.log(this.state.SearchResults);
    //     if(this.state.SearchResults.length > 0){
    //         this.handleDisplayCards();
    //     }
    // }

    handleUserSearch = async e => {
        // console.log(e.target.value);
        const users = await findUsers(e.target.value);
        this.setState({ searchResults: users.data });
        console.log("Search Results: " + this.state.searchResults);
    };

    
    handleAddUser = (e, d) => {
        // this.setState({ members: [...d.result] });
        console.log(d.result);
        this.state.members.push(d.result);
        this.setState({ members: this.state.members });
        // console.log("members: " + d.result.name);//gives name of user
        membersInfoObjectsArray.push({userName:d.result.name, image:d.result.image, realName: d.result.real_name});
        console.log(membersInfoObjectsArray);
    };

    handleUserSearch = async e => {
        const users = await findUsers(e.target.value);
        this.setState({ searchResults: users.data });

        // console.log(this.state.searchResults);//entire group
    };
    

handleDisplayCards(){
    for(let i = 0; i < this.state.SearchResults.length; ++i){
        this.setState({displayArray:[]});
        cardArray[i] =
        <div key={v4()} className="members__userImage"><img src={this.state.SearchResults[i].avatar} alt="User Photo" /></div>;
    }
    // this.setState({displayArray:cardArray});
}


handleDelete(e){
//  conversationsArray[conversationsArrayPosition].members[0].splice(e.currentTarget.name, 1);
//change to local array
    cardArray = [];
    this.handleDisplayCards();
}



    render() {
        return(
            <div className="members__flexWrapper">
            <div className="conversations__participant">
              {/* this has to hook into the backend */}
            <Form>
                <Form.Group>
                <label>Participants: </label>
                </Form.Group>

                <Form.Group inline>
                <Search 
                    results={this.state.searchResults}
                    // icon="search"
                    placeholder="search"
                    onSearchChange={e => this.handleUserSearch(e)}
                    onResultSelect={(e, d) => this.handleAddUser(e, d)}
                />
                </Form.Group>
                <Form.Group inline>
                {this.state.members.map(p => {
                    return (
                    <Label key={v4()} size="large">
                        <img src={p.avatar} /> {`     ${p.real_name}     `}
                        <Icon name="delete" />
                    </Label>
                    );
                })}
                </Form.Group>
                {/* <Form.Field control={Button}>Submit</Form.Field> */}
            </Form>
            </div>
            {/* {this.state.displayArray} */}
            </div>

        );
    }
}

export default Participants;
export {membersInfoObjectsArray};