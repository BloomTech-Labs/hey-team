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
  Image,
  Meta,
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
    const schedule = [];
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
          {Object.keys(this.state.schedule).map((k, i) => {
            if (this.state.schedule[k] === true) {
              return <Label key={i}> {k} </Label>;
            }
          })}
          <Label>
            {this.state.schedule.time} {''}
            {this.state.schedule.modifier}
          </Label>
          <Header>Responses</Header>
          <Card.Group stackable={true} doubling={true} itemsPerRow={3}>
            {this.state.members.map((m, i) => {
              let counter = 0;
              let time = null;
              this.state.responses.forEach((r, i) => {
                if (r.member === m._id) {
                  time = r.time_stamp;
                }
              });
              let date = new Date();
              if (time !== null) {
                console.log(time);
                date = new Date(parseInt(time) * 1000);
              }
              console.log(date);
              return (
                <Card key={i}>
                  <Card.Content>
                    <Image
                      floated="left"
                      style={{ height: '50px', width: '50px' }}
                      src={m.image}
                    />
                    <Card.Header>{m.real_name}</Card.Header>
                    <Card.Meta>{date.toDateString()}</Card.Meta>
                  </Card.Content>
                  <Card.Content>
                    <Grid stackable={true} doubling={true}>
                      {this.state.responses.map((r, i) => {
                        if (r.member === m._id) {
                          counter++;
                          return (
                            <div key={i}>
                              <Card.Header as="h4">
                                {this.state.questions[counter - 1]}
                              </Card.Header>
                              <Card.Meta>{r.response}</Card.Meta>
                            </div>
                          );
                        }
                      })}
                    </Grid>
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
