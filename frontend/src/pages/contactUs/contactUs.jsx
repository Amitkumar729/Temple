import React from "react";
import { Header } from "../../components/header/header";
import { Banner } from "../../components/banner/banner";
import { Footer } from "../../components/footer/footer";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import "./contactUs.css";

export const ContactUs = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="contact-container">
        <div className="contact-header">
          <h3>Address</h3>
        </div>
        <div className="contact-details">
          <div className="contact-data">
            <div className="headd">
              <h4>Rahu Dham-Address</h4>
            </div>
            <div className="dataa">
              Rahu Dham Temple.Old Age Home, 20 Bed "Maternity hospital Delhi
              Lucknow Expressway Nanau, district Aligarh. Uttar Pradesh-202131.
            </div>
          </div>
          <div className="contact-data">
            <div className="headd">
              <h4>Rahu Dham-Registered Office</h4>
            </div>
            <div className="dataa">
              Rahu Dham Temple.Old Age Home, 20 Bed "Maternity hospital Delhi
              Lucknow Expressway Nanau, district Aligarh. Uttar Pradesh-202131.
            </div>
          </div>
          <div className="contact-data">
            <div className="headd">
              <h4>Rahu Dham-Uttar Pradesh Office</h4>
            </div>
            <div className="dataa">
              4/274.GF Sector 4, Vaishali Ghaziabad UP.
            </div>
          </div>
          <div className="contact-header">
            <h3>Contact Us</h3>
          </div>
          <div className="info">
            <div className="contact-left">
              <BiLogoGmail size={"25px"} style={{ color: "blue" }} />
              <h4>inforahudham@gmail.com</h4>
            </div>
            <div className="contact-left">
              <FaPhoneAlt size={"20px"} style={{ color: "blue" }} />
              <h4>+91-9953909713</h4>
            </div>
            <div className="contact-left">
              <FaPhoneAlt size={"20px"} style={{ color: "blue" }} />
              <h4>+91 120-4162527</h4>
            </div>
            <div className="contact-left">
              <FaPhoneAlt size={"20px"} style={{ color: "blue" }} />
              <h4>+91-9953745401</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
