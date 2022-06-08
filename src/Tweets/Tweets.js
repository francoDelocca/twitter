import React    from "react";
import template from "./Tweets.jsx";

class Tweets extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Tweets;
