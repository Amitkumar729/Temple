import React from "react";
import "./founder.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export const Founder = () => {
  return (
    <div className="app-container">
      <Header />

      <div className="main-content">
        <div className="founder-container">
          <div className="title"><h4>About Us</h4></div>
          <div className="founder-sub-container">
            <div className="founder-wrapper">
              <img src="/images/founder.png" alt="Founder" />
            </div>
            <div className="last-container">
              <div className="sanatan-image">
                <img src="/images/image9.jpg" alt="Sanatan" />
              </div>
              <div className="text">
                First spirituality OTT platform.
                <br />
                Lifetime free for Rahu Dham members.
              </div>
            </div>
          </div>
          <div className="extra-image">
            <div className="extra-wrapper">
              <img src="/images/image7.jpg" />
            </div>
            <div className="extra-wrapper">
              <img src="/images/image5.jpg" />
            </div>
            <div className="extra-wrapper">
              <img src="/images/image8.jpg" />
            </div>
          </div>
        </div>
      </div>

      <Footer className="footer" />
    </div>
  );
};
