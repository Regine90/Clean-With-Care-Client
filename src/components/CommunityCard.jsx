import React, { useState } from "react";

function CommunityCard({ person }) {
  const [community, setCommunity] = useState(person);

  const handleChangeService = () => {
    setCommunity((prevState) => ({
      ...prevState,
      service:
        prevState.service === "Laundry Assistance"
          ? "Organizing Help"
          : prevState.service === "Organizing Help"
          ? "Deep Cleaning"
          : "Laundry Assistance",
    }));
  };

  return (
    <div className="community-card">
      <h2>My Name Is {community.firstName}</h2>
      <p>I Live In {community.area}</p>
      <p>I Can Help With {community.service}</p>
      <button className="btn primary-btn" onClick={handleChangeService}>
        Show Another Way I Help
      </button>
    </div>
  );
}

export default CommunityCard;
