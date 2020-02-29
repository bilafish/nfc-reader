import { h, Component } from "preact";
import { Router } from "preact-router";
import { Helmet } from "react-helmet";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };
  // <meta http-equiv="origin-trial" content={process.env.ORIGIN_TOKEN} />

  render() {
    return (
      <div id="app">
        <Helmet>
          <meta
            http-equiv="origin-trial"
            content={process.env.PREACT_APP_ORIGIN_TOKEN}
          />
        </Helmet>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}
