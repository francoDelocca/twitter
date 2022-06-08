import "./SearchBar.css";
import React from "react";
import {BsSearch} from "react-icons/bs";

function template() {
  return (
      <div className="search-bar">
          <div>
              <span>@</span>
          </div>
          <div>
              <input type={"text"} placeholder={"Search for users..."} />
              <button>
                  <BsSearch size={20}/>
              </button>
          </div>
      </div>
  );
};

export default template;
