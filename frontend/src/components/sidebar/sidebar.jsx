import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="side-nav">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </div>

        <div className="side-nav">
          <Link
            to={"/about-rahu"}
            style={{ textDecoration: "none", color: "white" }}
          >
            About Rahu
          </Link>
        </div>
        <div className="side-nav">
          <Link
            to={"/donations"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Donations
          </Link>
        </div>

        <div className="side-nav">
          <Link
            to={"/about-me"}
            style={{ textDecoration: "none", color: "white" }}
          >
            About me
          </Link>
        </div>
        <div className="side-nav">
          <Link
            to={"/contact-us"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
