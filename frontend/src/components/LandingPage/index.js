import React from 'react';

import {withRouter} from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Link as link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { Button } from 'semantic-ui-react'
import '../../Semantic-UI-CSS/semantic.min.css';

import '../../css/landingPageTop.css';
import TopNavigation from '../TopNavigation';

let displayHeader = "header";

class LandingPageIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'header': ''};
    } 


    handleBuyButton(){
        this.props.history.push('/welcome');
    }

    render() {
            return (
    <div className="wrapper">
        <TopNavigation />
        <div className="landingTop">
            <div className="landingTop__tite">
                These colors are completely random and temporary
                <div className="landingTop__tite landingTop__tite__sub">
                    buy this product...or else
                </div>
                <div className="productImage">
                    image or carousel here<br /><br /><br />
                    border is dev only
                </div>
                <div className="button__BuyNow">
                    <Button className="ui color1 button" animated='fade' onClick={() => this.handleBuyButton()}>
                        <Button.Content visible>
                            Buy Now
                        </Button.Content>
                        <Button.Content hidden>
                            More Words
                        </Button.Content>
                    </Button>
                </div>
                </div>
        fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />fdsfdsds<br />
        </div>

    </div>
    );
    }
}

export default LandingPageIndex;
export {displayHeader};