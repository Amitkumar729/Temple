import React, { useEffect, useState } from "react";
import "./donations.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DonationLoader } from "../../components/loader/loader";
import { Banner } from "../../components/banner/banner";
// import { donationData } from "../../data";

export const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch(
        "https://temple-backend.onrender.com/api/getDonationData"
      );
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

  return (
    <div className="app-container">
      <Header />
      <Banner />

      <div className="main-content">
        <div className="donation-container">
          <div className="donation-header">
            <h4>Donations</h4>
          </div>
          <img src="/images/scanner.jpg" />
          <div className="list">
            {donations.length > 0 ? (
              donations.map((donation, index) => (
                <div className="card" key={index}>
                  <div className="name">{donation.name}</div>
                  <div className="location">{donation.location}</div>
                </div>
              ))
            ) : (
              <DonationLoader />
            )}
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};
