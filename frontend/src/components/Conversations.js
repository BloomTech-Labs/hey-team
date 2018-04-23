import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { allConversations, deleteConversation } from '../actions/Conversation';

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
  Card,
  Menu,
  CardContent,
  CardDescription,
} from 'semantic-ui-react';

class Conversations extends Component {
  constructor() {
    super();
    this.state = {
      conversations: [],
      w_id: '5add171bf82fa1509c5407d9',
    };
  }

  async componentWillMount() {
    const w_id = localStorage.getItem('doc_id');
    const c = await allConversations(w_id);
    this.setState({ conversations: c.data });
    // this.setState({ w_id });
    console.log(this.state.conversations);
  }

  handleDeleteConversation = async (e, d) => {
    console.log(this.state.w_id, d.id);
    await deleteConversation(this.state.w_id, d.id);
    const c = await allConversations(this.state.w_id);
    this.setState({ conversations: c.data });
  };

  handleAddConversation = () => {
    this.props.history.push('/dashboard/conversations/new');
  };

  handleEditConversation = (e, d) => {
    console.log(d.id);
    /** Golden */
    this.props.history.push(`/dashboard/conversations/edit/?c_id=${d.id}`);
  };

  render() {
    // if (this.state.conversations.length > 0) {
    return (
      <Container>
        <Card.Group stackable={true} doubling={true} itemsPerRow={3}>
          {this.state.conversations.map((c, i) => {
            return (
              <Card key={c._id}>
                <Card.Content
                  extra
                  style={{
                    padding: '0px',
                  }}
                >
                  <Menu secondary>
                    <Menu.Item
                      id={c._id}
                      onClick={(e, d) => this.handleEditConversation(e, d)}
                    >
                      <Icon name="pencil" />
                    </Menu.Item>
                    <Menu.Item
                      id={c._id}
                      position="right"
                      onClick={(e, d) => this.handleDeleteConversation(e, d)}
                    >
                      <Icon name="trash" />
                    </Menu.Item>
                  </Menu>
                </Card.Content>
                <Card.Content>
                  <Card.Header>{c.title}</Card.Header>
                  <Card.Description>
                    {c.members.length} members
                  </Card.Description>
                  <Card.Description>
                    {c.responses.length} current responses
                  </Card.Description>
                  <Card.Description>
                    {c.questions.length} questions
                  </Card.Description>
                  <Card.Description>
                    Schedule:{' '}
                    {Object.keys(c.schedule).map((k, i) => {
                      if (c.schedule[k] === true) {
                        return <span key={i}> {k} </span>;
                      }
                    })}
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
          <Card>
            {/* <Container> */}
            <Button primary onClick={this.handleAddConversation}>
              Add Conversation
            </Button>
            {/* </Container> */}
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

export default withRouter(Conversations);
