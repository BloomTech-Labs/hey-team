import { connect } from 'react-redux';
import React, { Component } from 'react';
import { findUsers } from '../actions/FindUsers';
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
  { key: 'a', text: 'AM', value: 'am' },
  { key: 'p', text: 'PM', value: 'pm' },
];

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      test: [1, 1, 1, 1, 1, 1, 1, 1, 1],
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
        tz: '',
      },
      participants: [],
      questionToAdd: '',
    };
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  handleAddUser = (e, d) => {
    // this.setState({ participants: [...d.result] });
    this.state.participants.push(d.result);
    this.setState({ participants: this.state.participants });
    console.log(this.state.participants);
  };

  handleUserSearch = async e => {
    // console.log(e.target.value);
    const users = await findUsers(e.target.value);
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
    const questions = this.state.questions.map(q => {
      if (q !== d.children) {
        return q;
      }
    });
    console.log(questions);
    this.setState({ questions });
  };

  render() {
    const { schedule } = this.state;
    return (
      <div className="login-form">
        <Container>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                placeholder="Enter a title for this conversation"
                onChange={e => this.handleUserSearch(e)}
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
                label={<Dropdown defaultValue="am" options={options} />}
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
              {this.state.participants.map(p => {
                return (
                  <Label size="large">
                    <img src={p.avatar} /> {`     ${p.real_name}     `}
                    <Icon name="delete" />
                  </Label>
                );
              })}
            </Form.Group>
            <Form.Field control={Button}>Submit</Form.Field>
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

export default connect(mapStateToProps, {})(Edit);
