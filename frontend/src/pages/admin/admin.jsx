import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

export const AdminDashboard = () => {
 
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location }),
      });

      if (response.ok) {
        console.log("data saved...")
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
      <form onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Location:-</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
