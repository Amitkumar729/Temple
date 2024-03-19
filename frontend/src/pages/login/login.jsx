import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [showPass, setShowPass] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="header">
          <h2>Admin Login</h2>
        </div>
        <form className="input-container" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="align-wrapper">
            <div className="input-wrapper">
              <MdAlternateEmail size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                placeholder="Email address"
                required
              />
              <label className="form-label">Email</label>
            </div>
            {/* Password */}
            <div className="input-wrapper">
              <TbPasswordUser size={20} />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password"
                placeholder="Password"
                required
              />
              <label className="form-label">Password</label>

              <div className="eye-button">
                <FaRegEyeSlash
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
          </div>
           
          <button className="button" type="submit">
            <h3>Login</h3>
          </button>
        </form>
      </div>
    </div>
  );
};
