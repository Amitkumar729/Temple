import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

export const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location }),
      });

      if (response.ok) {
        console.log("data saved...");
        navigate("/donations");
      } else {
        console.error("Failed to save donation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="wrapper">
          <label className="input-label">Name:-</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="wrapper">
          <label className="input-label">Location:-</label>
          <input
            className="input-field"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
