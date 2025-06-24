import React, { useState } from "react";
import "../shared/styles.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Signup() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map frontend fields to backend expected fields
    const requestData = {
      firstName: formData.first,
      lastName: formData.last,
      email: formData.email,
      password: formData.password,
    };

    fetch(`${API_BASE_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to register");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Signup successful:", data);
        // You can redirect or show success message here
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
  };

  return (
    <main className="signup-page">
      <section className="signup-hero">
        <h1>Sign Up</h1>
        <p>Join CleanWithCare and become part of a caring community.</p>
      </section>

      <section className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first">First Name:</label>
            <input
              type="text"
              id="first"
              name="first"
              placeholder="First Name"
              value={formData.first}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last">Last Name:</label>
            <input
              type="text"
              id="last"
              name="last"
              placeholder="Last Name"
              value={formData.last}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn primary-btn">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
