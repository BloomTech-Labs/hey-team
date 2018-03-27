//Alex Cassell
//http://alexcassell.com
import React from 'react';

import * as Scroll from 'react-scroll';
import { Link as link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { Button } from 'semantic-ui-react'
import '../../Semantic-UI-CSS/semantic.min.css';

import '../../css/landingPageTop.css';
import TopNavigation from '../TopNavigation';

import Features from './Features';

let displayHeader = "header", shakeSignIn = "signIn__default", 
        shakeFeatures = "features__default", shakeLogo = "logo";

let scrollCount = 0; //if we want to add animations that only happen when the user has scrolled down a certain amount

class LandingPageIndex extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'header': ''};
    }

    componentWillMount(){
        this.handleHeaderScrolling();
        Events.scrollEvent.register('begin', function(to, element) {
        console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
        console.log("end", arguments);
        });

        scrollSpy.update();
    }


    componentWillUnmount(){
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop(){
        scroll.scrollToTop();
        // scrollCount = 0;
    }

    scrollToBottom(){
        scroll.scrollToBottom();
    }

    scrollTo(){
        scroll.scrollTo(100);
    }

    scrollMore(){
        scroll.scrollMore(100);
    }

    // handleSetActive(to) {
    //     console.log(to);
    // }

    handleScroll(e) {
        if(e.deltaY < 0) {//stops the scroll count from counting once the user has reached the top of the page
        scrollCount += 1;
        }
        if(e.deltaY > 0) {//counts down from 0 as the user scrolls down
        scrollCount -= 1;  
        }
        if(scrollCount > 0){//counts up as user scrolls up
        scrollCount = 0;
        }

        // if(scrollCount < -44){//once the bottom of the page is known this will stop it froming counting if the user keeps scrolling past the bottom
        //   scrollCount = -42;
        // }
    }

    handleHeaderScrolling(){
        console.log(window.scrollY);
        if(window.scrollY > 0){
            shakeFeatures = "features__default shakeHeaderMove";
            shakeSignIn = "signIn__default shakeHeaderMove";
            displayHeader = "header__background";
            shakeLogo = "logo shakeHeaderMove"
            this.setState({header: ''});
        }
        else{
            shakeLogo = "logo";
            shakeFeatures = "features__default";
            shakeSignIn = "signIn__default";
            displayHeader = "header__noBackground"
            this.setState({header: ''});
        }
        setTimeout(this.handleHeaderScrolling.bind(this), 200);
    }


    handleBuyButton(){
        this.props.history.push('/welcome');
    }

    render() {
            return (
                <div className="wrapper" onWheel={(e) =>this.handleScroll(e)}>
                    <TopNavigation />
                    <div className="landingTop">
                        <div className="landingTop__tite">
                            These colors are completely random and temporary
                            <div className="landingTop__tite landingTop__tite__sub">
                                buy this product...or else
                            </div>
                            <div className="productImage">
                                image or carousel here<br /><br /><br />
                                border is dev only<br /><br /><br />
                                maybe a picture of the bot<br /><br /><br />
                                in action
                            </div>
                            {/* button is no longer working correctly.. will have to take it apart */}
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
                    </div>
                    {/* <div className="divider"/> */} 
                    {/* the parallex has to be redone because it is broken in firefox */}
                        <Features />
                </div>
            );
    }
}

export default LandingPageIndex;
export {displayHeader};
export {shakeSignIn};
export {shakeFeatures};
export {shakeLogo};