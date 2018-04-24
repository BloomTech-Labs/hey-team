import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { findUsers } from '../actions/FindUsers';
import { saveConversation } from '../actions/Conversation';

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

const options = [
  { key: 'a', text: 'AM', value: 'AM' },
  { key: 'p', text: 'PM', value: 'PM' },
];

class New extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      questions: [],
      title: '',
      schedule: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        time: '',
        modifier: 'AM',
        tz: '',
      },
      members: [],
      localMembers: [],
      questionToAdd: '',
    };
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  handleAddUser = (e, d) => {
    console.log('result', d.result);
    this.state.members.push(d.result.id);
    this.state.localMembers.push(d.result);
    this.setState({ localMembers: this.state.localMembers });
    this.setState({ members: this.state.members });
    console.log(this.state.members);
  };

  handleUserSearch = async e => {
    // console.log(e.target.value);
    const users = await findUsers(
      localStorage.getItem('doc_id'),
      e.target.value
    );
    this.setState({ searchResults: users.data });

    // console.log(this.state.searchResults);
  };

  handleUpdateSchedule = (e, d) => {
    // console.log(d.label.toLowerCase());
    const day = d.label.toLowerCase();
    const checked = !this.state.schedule[day];
    Object.keys(this.state.schedule).forEach(key => {
      if (key === day) {
        this.state.schedule[day] = checked;
      }
    });
    this.setState({ schedule: this.state.schedule });
  };

  handleAddQuestion = (e, d) => {
    this.state.questions.push(this.state.questionToAdd);
    this.setState({ questions: this.state.questions });
    this.setState({ questionToAdd: '' });
  };

  handleUpdateQuestionToAdd = (e, d) => {
    this.setState({ questionToAdd: e.target.value });
    console.log(this.state.questionToAdd);
  };

  handleRemoveQuestion = (e, d) => {
    console.log(d.children);
    const questions = [];
    this.state.questions.forEach(p => {
      if (p !== d.children) {
        questions.push(p);
      }
    });
    console.log(questions);
    this.setState({ questions });
  };

  handleRemoveParticipant = (e, d) => {
    console.log('event', e);
    console.log('data', d);
    const localMembers = [];
    const members = [];
    this.state.localMembers.forEach(q => {
      if (q.real_name !== d.children[1]) {
        localMembers.push(q);
        members.push(q.id);
      }
    });
    console.log(members);
    this.setState({ localMembers });
    this.setState({ members });
  };

  handleUpdateTitle = async (e, d) => {
    this.state.title = e.target.value;
    await this.setState({ title: this.state.title });
    // console.log(this.state.title);
  };

  handleModifier = async (e, d) => {
    // console.log(e.target.value, d.value);
    let schedule = { ...this.state.schedule };
    schedule.modifier = d.value;
    await this.setState({ schedule });
    console.log(this.state);
  };

  handleSave = async () => {
    console.log(this.state);
    await saveConversation(localStorage.getItem('doc_id'), this.state);
    this.props.history.push('/dashboard/conversations');
  };

  handleUpdateTime = async e => {
    let schedule = { ...this.state.schedule };
    schedule.time = e.target.value;
    await this.setState({ schedule });
  };

  render() {
    const { schedule } = this.state;
    return (
      <div className="form-group">
        <Container>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                value={this.state.title}
                placeholder="Enter a title for this conversation"
                onChange={(e, d) => this.handleUpdateTitle(e, d)}
                style={{ maxWidth: '500px' }}
              />
            </Form.Group>
            <Form.Group>
              <label>Schedule: </label>
            </Form.Group>
            <Form.Group inline>
              <Form.Field
                control={Checkbox}
                label="Mon"
                value="1"
                checked={this.state.schedule.mon}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Tue"
                value="1"
                checked={this.state.schedule.tue}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Wed"
                value="1"
                checked={this.state.schedule.wed}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Thu"
                value="1"
                checked={this.state.schedule.thu}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Fri"
                value="1"
                checked={this.state.schedule.fri}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Sat"
                value="1"
                checked={this.state.schedule.sat}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
              <Form.Field
                control={Checkbox}
                label="Sun"
                value="1"
                checked={this.state.schedule.sun}
                onChange={(e, d) => this.handleUpdateSchedule(e, d)}
              />
            </Form.Group>
            <Form.Group inline>
              <Input
                onChange={this.handleUpdateTime}
                label={
                  <Dropdown
                    defaultValue="AM"
                    options={options}
                    onChange={(e, d) => this.handleModifier(e, d)}
                  />
                }
                labelPosition="right"
                placeholder="Time"
              />
            </Form.Group>
            <Form.Group>
              <label>Questions: </label>
            </Form.Group>
            <Form.Group>
              <Form.Input
                // action={{ icon: 'plus', color: 'green' }}
                placeholder="Questions"
                onChange={(e, d) => this.handleUpdateQuestionToAdd(e, d)}
              />
              <Form.Button
                circular
                color="green"
                icon="plus"
                onClick={(e, d) => this.handleAddQuestion(e, d)}
                // onClick={(e, d) => this.handleAddQuestion(e, d)}
              />
            </Form.Group>
            {this.state.questions.map(q => {
              return (
                <Form.Group>
                  <Popup
                    trigger={
                      <Label
                        as="a"
                        size="large"
                        onClick={(e, d) => this.handleRemoveQuestion(e, d)}
                      >
                        {q}
                        {/* <Icon
                          name="delete"
                          onClick={(e, d) => this.handleRemoveQuestion(e, d)}
                        /> */}
                      </Label>
                    }
                    content="Click to remove from list"
                    // onClick={(e, d) => this.handleRemoveQuestion(e, d)}
                  />
                </Form.Group>
              );
            })}
            <Form.Group>
              <label>localMembers: </label>
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
              {this.state.localMembers.map(p => {
                return (
                  <Popup
                    trigger={
                      <Label
                        as="a"
                        size="large"
                        onClick={(e, d) => this.handleRemoveParticipant(e, d)}
                      >
                        <img src={p.image} />
                        {`${p.real_name}`}
                      </Label>
                    }
                    content="Click to remove from list"
                  />
                );
              })}
            </Form.Group>
            <Form.Field
              control={Button}
              onClick={(e, d) => this.handleSave(e, d)}
            >
              Save
            </Form.Field>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // user: state.user,
  };
};

/** Golden */
export default withRouter(connect(mapStateToProps, {})(New));
