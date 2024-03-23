import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ showDonation, showHome, showAbout, showRahu }) => {
  return (
    <div className="header-container">
      <div className="first-container">
        <div className="logo-container">
          <img src="/images/rahu.png" />
        </div>
        <div className="logo-name">राहु धाम ट्रस्ट्</div>
      </div>
      <div className="second-container">
      <div className="nav">
      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>
    </div>
       
        <div className="nav">
          <Link
            to={"/about-rahu"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Rahu
          </Link>
        </div>
        <div className="nav">
        <Link
          to={"/donations"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Donations
        </Link>
      </div>

      

       
          <div className="nav">
            <Link
              to={"/about-me"}
              style={{ textDecoration: "none", color: "white" }}
            >
              About me
            </Link>
          </div>
     
      </div>
    </div>
  );
};
