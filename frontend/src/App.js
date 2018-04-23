//Alex Cassell
//http://alexcassell.com

import React, { Component } from "react";
import { SignIn } from "./components";

import NavigationHeader from "./components/Interior/Navigation/NavigationHeader";

import ConversationsIndex from "./components/Interior/Conversations/index.js";
import PreferencesIndex from "./components/Interior/Preferences/index.js";
import BillingIndex from "./components/Interior/Billing/index.js";

import New from "./components/Interior/Conversations/NewConversation/index.js";
import View from "./components/Interior/Conversations/ViewConversation/index.js";

import LandingPageIndex from "./components/LandingPage/index.js";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Z_VERSION_ERROR } from "zlib";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { homePage: true };
  }

  componentWillMount(){
    let count = 0;
    for (let i = 0; i < window.location.href.length; i++) {
      if (window.location.href[i] == "/") {
        count++;
        console.log(count);
        if (count == 3) {
          console.log(i);
          console.log(window.location.href.length)
          if (window.location.href.length > i) {
            this.setState({ homePage: false });
          }
        }
      }
    }
  }


  render() {
    console.log(window.location.href);

    // <LandingPageIndex {...this.state} />
    const homePage = this.state.homePage;

    const navigation = homePage ? (
      <div>
        <Route path="/welcome" component={SignIn} />
        <Route path="/billing" component={BillingIndex} />
        <Route exact path="/conversations" component={ConversationsIndex} />
        <Route path="/preferences" component={PreferencesIndex} />
        <Route path="/conversations/new" component={New} />
        <Route path="/conversations/edit" component={New} />
        <Route path="/conversations/view" component={View} />
        <NavigationHeader />
      </div>
    ) : (
      <div>
        <Route path="/welcome" component={SignIn} />
        <Route path="/billing" component={LandingPageIndex} />
        <Route exact path="/conversations" component={LandingPageIndex} />
        <Route path="/preferences" component={LandingPageIndex} />
        <Route path="/conversations/new" component={LandingPageIndex} />
        <Route path="/conversations/edit" component={LandingPageIndex} />
        <Route path="/conversations/view" component={LandingPageIndex} />
      </div>
    );
    return (
      <Router>
        <div>
          {/* above will only be shown if logged in and 
          landing page will not be shown if logged in */}
          <Route exact path="/" component={LandingPageIndex} />
          {navigation}
        </div>
      </Router>
    );
  }
}
export default App;
