import "./Register.css";
import React from "react";
import logo from "../logo.svg";

function template() {
  return (
    <div className="register-wrapper">
        <div className="register">
            <div className="register-logo">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <form action="">
                <div className="input-group">
                    <span className="input-title">Nickname</span>
                    <input className="input-controller" type="text" placeholder="Nickname"/>
                </div>
                <div className="input-group">
                    <span className="input-title">Full Name</span>
                    <input className="input-controller" type="text" placeholder="Full Name"/>
                </div>
                <div className="input-group">
                    <span className="input-title">Password</span>
                        <input className="input-controller" type="password" placeholder="Password"/>
                </div>
                <div className="input-group">
                    <button className="register-button">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default template;
