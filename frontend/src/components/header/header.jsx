import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "../sidebar/sidebar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="first-container">
          <div className="logo-container">
            <img src="/images/rahu.png" />
          </div>
          <div className="logo-name">राहु धाम ट्रस्ट्</div>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <RxHamburgerMenu size={35} style={{ color: "white" }} />
        </div>
                   {menuOpen && <Sidebar />}

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
    </>
  );
};
