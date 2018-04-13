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
} from 'semantic-ui-react';

const options = [
  { key: 'a', text: 'AM', value: 'am' },
  { key: 'p', text: 'PM', value: 'pm' },
];

class New extends Component {
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

  handleAddQuestion = (e, d) => {};

  handleRef = c => {
    this.inputRef = c;
  };

  focus = () => {
    this.inputRef.focus();
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
                ref={this.handleRef}
              />
              <Form.Button
                content="focus"
                circular
                color="green"
                icon="plus"
                onClick={this.focus}
                // onClick={(e, d) => this.handleAddQuestion(e, d)}
              />
            </Form.Group>
            {this.state.questions.map(q => {
              return (
                <Form.Group>
                  <Form.Input action={{ icon: 'minus', color: 'red' }} />
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

export default connect(mapStateToProps, {})(New);
