import { h, Component } from "preact";
import { Router } from "preact-router";
import { Helmet } from "react-helmet";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import About from "../routes/about";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Helmet>
          /* Global site tag (gtag.js) - Google Analytics */
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-155874130-2"
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-155874130-2');
            `}
          </script>
          <meta
            http-equiv="origin-trial"
            content={process.env.PREACT_APP_ORIGIN_TOKEN}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="Description"
            content="WebNFC is a web app that runs on your Chrome browser for reading and writing NFC tags."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Cabin&display=swap"
            rel="stylesheet"
          />
          <title>webNFC</title>
        </Helmet>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <About path="/about/" user="me" />
        </Router>
      </div>
    );
  }
}
