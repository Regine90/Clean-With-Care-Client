import React from "react";
import "../shared/styles.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
            Log In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
