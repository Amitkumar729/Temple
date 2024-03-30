import React from "react";
import "./footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="address">
        <div className="head">Address</div>
        <div className="data-content">
          Rahu Dham Temple.Old Age Home, 20 Bed "Maternity hospital Delhi
          Lucknow Expressway Nanau, district Aligarh. Uttar Pradesh-202131
        </div>
      </div>
      <div className="office">
        <div className="head">Registered Office</div>
        <div className="data-content">
          H-755 A2 Palam Extn Sector 7, Dwarka New Delhi-110075
          <br />
          Uttar Pradesh Office:-
          <br />
          4/274.GF Sector 4, Vaishali Ghaziabad UP
        </div>
      </div>
      <div className="details">
        <div className="head">Contact Us</div>
        <div className="wrapper">
          <div className="icon">
            <BiLogoGmail />
          </div>
          <div className="contact">Inforahudham@gmail.com</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <FaPhoneAlt size={"15px"} />
          </div>
          <div className="contact">+91-9953909713</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <FaPhoneAlt size={"15px"} />
          </div>
          <div className="contact">+91 120-4162527</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <FaPhoneAlt size={"15px"} />
          </div>
          <div className="contact">+91-9953745401</div>
        </div>
      </div>
    </div>
  );
};
