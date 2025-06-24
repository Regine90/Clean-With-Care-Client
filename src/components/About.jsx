import React from "react";
import { Link } from "react-router-dom";
import "../shared/styles.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About CleanWithCare</h1>
        <p>Creating safe, welcoming, and healthy homes for all.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            At CleanWithCare, we believe a clean home is the foundation of a
            healthy life. We support individuals and families struggling with
            mental health challenges, life transitions, or disabilities by
            connecting them with volunteers who care.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Born from a desire to help our neighbors in need, CleanWithCare
            began as a grassroots movement in our community. Today, we will grow
            thanks to the strength of the people we serve.
          </p>
        </div>

        <div className="about-card">
          <h2>Get Involved</h2>
          <p>
            Whether you can offer your time, skills, or support, we welcome you
            to join our mission. Together, we can make a difference—one home at
            a time.
          </p>
          <Link to="/signup">
            <button className="btn primary-btn">Join Us</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
