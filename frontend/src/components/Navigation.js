import React, {Component} from 'react';


class InteriorNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {answersArray: []};
        }
    

    componentDidMount(){
        this.props.history.push('/conversations');
    }

    render () {

        return (
            <div>
            </div>
        );
    }
    }

export default InteriorNavigation;