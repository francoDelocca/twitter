import "./CreateTweetModal.css";
import React from "react";

function template() {
  return (
    <div className="create-tweet-modal">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">New Tweet</span>
          <span className="modal-close">X</span>
        </div>
        <div className="modal-content">
          <span>What are you thinking?</span>
          <textarea className="" name="tweet" id="tweet" cols="40" rows="12"></textarea>
        </div>
        <div className="modal-footer">
          <button>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default template;
