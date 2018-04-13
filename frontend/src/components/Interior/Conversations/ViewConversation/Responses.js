//Alex Cassell
//http://alexcassell.com
//display responses

import React from 'react';
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/conversationsResponses.css';
import '../../../../css/cards.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let cardArray = [];
let questionsArray = [];
let dataArray = [];

class Responses extends React.Component {
    constructor(props) {
    super(props);
    this.state = {answersArray: []};
    }

    componentWillMount(){
        this.handleDisplayCards();
    }
//saves conversation object data into an array
    handleDisplayCards(){
        for(let i = 0; i < conversationsArray[conversationsArrayPosition].participants[0].length; i++){
            for(let j = 0; j < conversationsArray[conversationsArrayPosition].questions.length; j++){
                questionsArray[j] =
                <div key={v4()} className="questionsArrayWrapper">
                    <div className="questionsArrayQuestion cards__titles">
                        {dataArray[[i[j]]] =  conversationsArray[conversationsArrayPosition].questions[j] + ":"}
                    </div>
                    <div className="questionsArrayAnswer">
                        {dataArray[[i[j]]] =  conversationsArray[conversationsArrayPosition].participants[0][i].answers[j]}
                    </div>
                </div>
            }
            this.setState({displayArray:[]});
            cardArray[i] =
            <div key={v4()} className="cardWrap"><div className="ui card"><div className="content"><div className="card__header">
            {dataArray[[i[0]]] = conversationsArray[conversationsArrayPosition].participants[0][i].userName}</div><div className="description"><div className="cards__time"><div className="cards__time__wrap"><span className="cards__titles">Time: </span>
            {dataArray[[i[1]]] = conversationsArray[conversationsArrayPosition].participants[0][i].responseTime}</div><div className="cards__time__wrap"><span className="cards__titles">Date: </span>
            {dataArray[[i[2]]] = conversationsArray[conversationsArrayPosition].participants[0][i].responseDate}</div></div><div className="cards__questionsWrapper"><div className="cards__questions">
            {dataArray[[i[3]]] = questionsArray[0]}</div><div className="cards__questions">
            {dataArray[[i[4]]] = questionsArray[1]}</div><div className="cards__questions">
            {dataArray[[i[5]]] = questionsArray[3]}</div>
            </div>
            <div className="cards__created">
            </div></div></div></div></div>;
            this.setState({displayArray:cardArray});
        }
        console.log(this.state.answersArray);
    }

    render() {
        return(
            <div className="responses__flexWrapper">
                {this.state.displayArray}
            </div>

        );
    }
}

export default Responses;
