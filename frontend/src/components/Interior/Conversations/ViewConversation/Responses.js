//Alex Cassell
//http://alexcassell.com
//display responses

import React from 'react';
import { Button } from 'semantic-ui-react'
import { v4 } from 'uuid';//creates unique keys

import '../../../../css/conversationsResponses.css';
import '../../../../css/cards.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let cardArray = [];
let questionsArray = [[]];
let dataArray = [];

class Responses extends React.Component {
    constructor(props) {
    super(props);
    this.state = {somestate: true};
    }

    componentWillMount(){
        this.handleDisplayCards();
    }
//saves conversation object data into an array
    handleDisplayCards(){
        for(let i = 0; i < conversationsArray[conversationsArrayPosition].participants[0].length; i++){
            // for(let j = 0; j < conversationsArray[conversationsArrayPosition].questions.length; j++){
            //     for(let h = 0; h < conversationsArray[conversationsArrayPosition].questions.length; h++){
            //     questionsArray[j][h] = 
            //     <div key={v4()} className="questionsArrayWrapper">
            //         <div className="questionsArrayQuestion">
            //             dataArray[[i[3 + h]]] =  conversationsArray[conversationsArrayPosition].questions[h];
            //         </div>
            //         <div className="questionsArrayAnswer">
            //             dataArray[[i[3 + h]]] =  conversationsArray[conversationsArrayPosition].participants[conversationsArrayPosition][i].answers[h];
            //         </div>
            //     </div>
            //     }
            // }
            this.setState({displayArray:[]});
            cardArray[i] =
            <div key={v4()} className="cardWrap"><div className="ui card"><div className="content"><div className="card__header">
            {dataArray[[i[0]]] = conversationsArray[conversationsArrayPosition].participants[0][i].userName}</div><div className="description"><div className="cards__time"><span className="cards__titles">Time: </span>
            {dataArray[[i[1]]] = conversationsArray[conversationsArrayPosition].participants[0][i].responseTime}</div><div className="cards__schedule"><span className="cards__titles">Date: </span>
            {dataArray[[i[2]]] = conversationsArray[conversationsArrayPosition].participants[0][i].responseDate}</div><div className="cards__created">
            </div></div></div></div></div>;
            this.setState({displayArray:cardArray});
        }
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
