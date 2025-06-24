import "../shared/styles.css";
import React, { useState, useEffect } from "react";
import CommunityCard from "../components/CommunityCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Finding() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/community-helpers`)
      .then((response) => response.json())
      .then((results) => {
        console.log("Fetched data:", results);
        setPeople(results.data); // <-- correct extraction here
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="finding-page">
      <section className="finding-hero">
        <h1>Find a Community</h1>
        <p>
          We connect you with local groups, volunteers, and resources to create
          a supportive, welcoming home.
        </p>
      </section>

      <section className="community-section">
        <h2 className="section-header">Our Community Members</h2>
        <div className="card-row">
          {people.map((person) => (
            <CommunityCard key={person._id} person={person} />
          ))}
        </div>
      </section>

      <section className="support-section">
        <h2 className="section-header">Support Resources</h2>
        <div className="card-row">
          <div className="community-card">
            <h2>Support Groups</h2>
            <p>
              Join virtual or in-person groups for mental health, family
              support, and more.
            </p>
          </div>
          <div className="community-card">
            <h2>Volunteer Programs</h2>
            <p>
              Find people in your area willing to help with cleaning,
              organizing, or companionship.
            </p>
          </div>
          <div className="community-card">
            <h2>Resources & Guides</h2>
            <p>
              Access helpful articles, checklists, and how-to guides for a
              cleaner, healthier home.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Finding;
