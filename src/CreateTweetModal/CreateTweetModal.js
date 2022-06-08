import React    from "react";
import template from "./CreateTweetModal.jsx";

class CreateTweetModal extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CreateTweetModal;
