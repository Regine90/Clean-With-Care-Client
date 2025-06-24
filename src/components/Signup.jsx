import React from "react";
import "../shared/styles.css";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
