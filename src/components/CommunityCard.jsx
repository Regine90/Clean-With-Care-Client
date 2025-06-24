import React, { useState } from "react";

function CommunityCard({ person }) {
  const [community, setCommunity] = useState(person);

  const handleChangeService = () => {
    const services = [
      "Teacher",
      "Nurse",
      "Gardener",
      "Laundry Assistance",
      "Organizing Help",
      "Companion",
    ];
    let newService;
    do {
      newService = services[Math.floor(Math.random() * services.length)];
    } while (newService === community.service);

    setCommunity((prevState) => ({
      ...prevState,
      service: newService,
    }));
  };

  return (
    <div className="community-card">
      <h2>My Name Is {community.firstName}</h2>
      <p>I Live In {community.area}</p>
      <p>I Work As A {community.service}</p>
      <button className="btn primary-btn" onClick={handleChangeService}>
        Change Service
      </button>
    </div>
  );
}

export default CommunityCard;
