import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container,
  Header,
  Grid,
  Label,
  List,
  Card,
  Item,
} from 'semantic-ui-react';

import { findConversation } from '../actions/Conversation';

class ConversationView extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    const id = params.get('c_id');
    findConversation(id)
      .then(c => this.setState(c.data))
      .catch(console.error);
  }
  render() {
    console.log(this.state);
    if (this.state.members) {
      return (
        <Container>
          <Header>Participants</Header>
          <Grid stackable={true} doubling={true} columns={6}>
            {this.state.members.map((m, i) => {
              return (
                <Label key={i}>
                  <img src={m.image} /> {'   '}
                  {`${m.real_name}`}
                </Label>
              );
            })}
          </Grid>

          <Header>Questions</Header>
          <List>
            {this.state.questions.map((q, i) => {
              return (
                <List.Item key={i}>
                  <Label>{q}</Label>
                </List.Item>
              );
            })}
          </List>

          <Header>Schedule</Header>
          {this.state.responses[0].time_stamp}
          <Header>Responses</Header>
          <Card.Group stackable={true} doubling={true} itemsPerRow={3}>
            {this.state.members.map((m, i) => {
              return (
                <Card key={i}>
                  <Card.Content>
                    <Item>
                      <Item.Content>
                        <img
                          style={{ height: '30px', width: '30px' }}
                          src={m.image}
                        />
                        <Item.Header>{m.real_name}</Item.Header>
                        <Item.Meta>date</Item.Meta>
                      </Item.Content>
                      <Item.Content>
                        <Grid>
                          {this.state.responses.map((r, i) => {
                            if (r.member === m._id) {
                              return (
                                <div key={i}>
                                  {/* {this.state.questions[i]} */}
                                  {r.response}
                                </div>
                              );
                            }
                          })}
                        </Grid>
                      </Item.Content>
                    </Item>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}

export default withRouter(ConversationView);
