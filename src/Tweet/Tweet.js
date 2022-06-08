import React    from "react";
import template from "./Tweet.jsx";

class Tweet extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Tweet;
