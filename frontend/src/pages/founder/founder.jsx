import React from "react";
import "./founder.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export const Founder = () => {
  return (
    <div className="app-container">
      <Header showHome={true} showDonation={true} showAbout={false} />

      <div className="main-content">
        <div className="founder-container">
          <div className="title">About Us</div>
          <div className="wrapper">
            <div className="founder-wrapper">
              <img src="/images/founder.png" alt="Founder" />
            </div>
            <div className="last-container">
              <div className="sanatan-image">
                <img src="/images/image9.jpg" alt="Sanatan" />
              </div>
              <div className="text">
                First spirituality OTT platform. Lifetime free for Rahu Dham
                members.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="footer" />
    </div>
  );
};
