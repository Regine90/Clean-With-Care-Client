import React, { useState } from "react";
import "../shared/styles.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [formData, setFormData] = useState({
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

    fetch(`${API_BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Login successful:", data);
      })
      .catch((err) => console.error("Login error:", err));
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <h1>Login to Your Account</h1>
        <p>Access your community resources and manage your account.</p>
      </section>

      <section className="login-form">
        <form onSubmit={handleSubmit}>
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
            Log In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
