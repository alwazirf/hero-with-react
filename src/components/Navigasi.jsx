import React from "react";
import "../assets/css/styles.css";
import Logo from "../assets/img/Group 62.svg";

function Navigasi() {
  return (
    <div className="container navbar">
      <div className="n-left">
        <img src={Logo} alt="" />
        <span>Kreed</span>
      </div>
      <div className="n-right">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>How it works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navigasi;
