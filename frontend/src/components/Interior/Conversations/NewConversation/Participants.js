//Alex Cassell
//http://alexcassell.com
//members reusuable component

import React from "react";
import axios from "axios";
import { v4 } from "uuid"; //creates unique keys
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
  Popup
} from "semantic-ui-react";

import "../../../../css/conversationsParticipants.css";
import { findUsers } from "../../../Actions/FindUsers";
import { conversationsArray } from "../index.js";
import { editClicked } from "../index.js";
import { conversationsArrayPosition } from "../index.js";

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

  componentWillMount() {
    if (editClicked) {
      this.handleEditSearch();
    }
  }

  handleEditSearch() {
    //autofill
    for (
      let j = 0;
      j < conversationsArray[conversationsArrayPosition].members.length;
      j++
    ) {
      this.state.members.push(
        <Label key={v4()} size="large">
          <img
            src={
              conversationsArray[conversationsArrayPosition].members[j].image
            }
          />
          {`     ${
            conversationsArray[conversationsArrayPosition].members[j].realName
          }     `}
          <Icon name="delete" />
        </Label>
      );
    }
    this.setState({ members: this.state.members });
  }

  handleUserSearch = async e => {
    const users = await findUsers(e.target.value);
    this.setState({ searchResults: users.data });
  };

  handleAddUser = (e, d) => {
    this.state.members.push(d.result);
    this.setState({ members: this.state.members });
    membersInfoObjectsArray.push({
      // name: d.result.name,
      // image: d.result.image,
      // real_name: d.result.real_name,
      // color:  d.result.color,
      // conversations: d.result.conversations,
      // email: d.result.email,
      id: d.result.id,
      // team_id: d.result.team_id,
      // tz_label: d.result.tz_label,
      // tz_offset: d.result.tz_offset,
      // workspace:d.result.workspace
    });
  };

  handleUserSearch = async e => {
    const users = await findUsers(e.target.value);
    this.setState({ searchResults: users.data });

    // console.log(this.state.searchResults);//entire group
  };

  handleDisplayCards() {
    for (let i = 0; i < this.state.SearchResults.length; ++i) {
      this.setState({ displayArray: [] });
      cardArray[i] = (
        <div key={v4()} className="members__userImage">
          <img src={this.state.SearchResults[i].avatar} alt="User Photo" />
        </div>
      );
    }
  }

  handleDelete(e) {
    //not implemented yet
    //change to local array
    cardArray = [];
    this.handleDisplayCards();
  }

  render() {
    return (
      <div>
        <div className="conversations__participantsTitle">Participants</div>
        <Form.Group>
          <Search
            results={this.state.searchResults}
            placeholder="search"
            onSearchChange={e => this.handleUserSearch(e)}
            onResultSelect={(e, d) => this.handleAddUser(e, d)}
          />
        </Form.Group>
        <Form.Group>
          {this.state.members.map(p => {
            return (
              <Label key={v4()} size="large">
                <img src={p.avatar} /> {`     ${p.real_name}     `}
                <Icon name="delete" />
              </Label>
            );
          })}
        </Form.Group>
      </div>
    );
  }
}

export default Participants;
export { membersInfoObjectsArray };
