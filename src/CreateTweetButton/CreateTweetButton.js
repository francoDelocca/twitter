import React    from "react";
import template from "./CreateTweetButton.jsx";

class CreateTweetButton extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CreateTweetButton;
