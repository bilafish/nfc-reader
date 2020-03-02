import { h, Component } from "preact";
import style from "./style";

export default class About extends Component {
  state = {
    time: Date.now(),
    count: 10
  };

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { time, count }) {
    return (
      <div class={style.profile}>
        <h1>About: {user}</h1>
        <p>More info about Web NFC.</p>
      </div>
    );
  }
}
