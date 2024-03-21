import React, { useEffect, useState } from "react";
import "./donations.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import { donationData } from "../../data";
 

export const Donations = () => {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/getDonationData");
      if (response.ok) {
        const data = await response.json();
        setDonations(data.data);
      } else {
        console.error("Failed to fetch donations");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  // console.log("donations -> ", donations);

  return (
    <div className="app-container">
      <Header showDonation={false} showHome={true} showAbout={true} />
      <div className="main-content">
        <div className="donation-container">
          <div className="header">Donations</div>
          <div className="list">
         
          {donations.map((donation, index) => (
            <div className="card" key={index}>
              <div className="name">{donation.name}</div>
              <div className="location">{donation.location}</div>
            </div>
          ))}
       
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};
