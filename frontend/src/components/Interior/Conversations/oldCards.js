import React from 'react';
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    IconButton,
    FABButton,
    CardMenu,
    Icon,
} from 'react-mdl';

import '../../../css/cards.css';

const Conversation = () => {
    return (
        <div className="conversCard">

        <div className="cards">
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle
                style={{
                color: '#fff',
                height: '176px',
                background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
                }}
            >
                Welcome
            </CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="edit" />
                <IconButton name="delete" />
            </CardMenu>
            </Card>
        </div>
        <div>
            <FABButton colored>
            <Icon name="add" />
            </FABButton>
        </div>
        </div>
    );
};

export default Conversation;