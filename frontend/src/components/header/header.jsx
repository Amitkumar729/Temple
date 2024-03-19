import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ showDonation, showHome, showAbout }) => {
  return (
    <div className="header-container">
      <div className="first-container">
        <div className="logo-container">
          <img src="/images/rahu.png" />
        </div>
        <div className="logo-name">राहु धाम ट्रस्ट्</div>
      </div>
      <div className="second-container">
      {showDonation && (
        
        
        <div className="nav">
          <Link
            to={"/donations"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Donations
          </Link>
        </div>

       
        
          
          )}
          {
            showHome && (
              <div className="nav">
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </Link>
            </div>
            )
          }

          {
            showAbout && (
              <div className="nav">
              <Link
                to={"/about-me"}
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </div>
            )
          }
          
          </div>
    </div>
  );
};
