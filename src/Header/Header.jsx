import "./Header.css";
import logo from '../logo.svg';
import React from "react";

function template() {
  return (
    <header className="header">
        <div className="header-user">
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <div className="header-user-name">
            <p>@UserName</p>
        </div>
    </header>
  );
}

export default template;
