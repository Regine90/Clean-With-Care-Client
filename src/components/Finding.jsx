import React from "react";
import "../shared/styles.css";

function Finding() {
  return (
    <main className="finding-page">
      <section className="finding-hero">
        <h1>Find a Community</h1>
        <p>
          We connect you with local groups, volunteers, and resources to create
          a supportive, welcoming home.
        </p>
      </section>

      <section className="finding-cards">
        <div className="community-card">
          <h2>Support Groups</h2>
          <p>
            Join virtual or in-person groups for mental health, family support,
            and more.
          </p>
        </div>

        <div className="community-card">
          <h2>Volunteer Programs</h2>
          <p>
            Find people in your area willing to help with cleaning, organizing,
            or companionship.
          </p>
        </div>

        <div className="community-card">
          <h2>Resources & Guides</h2>
          <p>
            Access helpful articles, checklists, and how-to guides for a
            cleaner, healthier home.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Finding;
