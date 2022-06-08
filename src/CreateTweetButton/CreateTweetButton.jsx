import "./CreateTweetButton.css";
import React from "react";
import {BsPencilSquare} from "react-icons/bs";

function template() {
  return (
      <div className="tweet-create">
          <div className="tweet-create-icon">
              <BsPencilSquare size={25}/>
          </div>
      </div>
  );
};

export default template;
