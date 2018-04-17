//Alex Cassell
//http://alexcassell.com
import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../../css/interiorNavigation.css';

class InsideNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: 'inbox' }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if(name === "conversations"){
            this.props.history.push('/conversations');
        }
    }
        render() {
            const { activeItem } = this.state
            return (
                <div className="interior__wrapper">
                <div className="interiorNavigation">
                <Menu vertical>
                    <Menu.Item name='conversations' active={activeItem === 'conversations'} onClick={this.handleItemClick}>
                    <Label color='teal'>5</Label>
                    Conversations
                    </Menu.Item>
                    <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                    <Label>0</Label>
                    {/* <i className="check icon"/> */}
                    Preferences
                    </Menu.Item>

                    <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                    <Label>1</Label>
                    Billing

                    </Menu.Item>
                </Menu>
            </div>
            </div>
        );
    }
                
}
export default InsideNavigation;