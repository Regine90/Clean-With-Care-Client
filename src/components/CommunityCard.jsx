import React, { useState } from "react";

function CommunityCard({ person, onDelete, onUpdate }) {
  const [community, setCommunity] = useState(person);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: community.firstName,
    area: community.area,
    service: community.service,
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

    setCommunity((prev) => ({ ...prev, service: newService }));
  };

  const handleDelete = () => {
    fetch(`${API_BASE_URL}/api/community-helpers/${community._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(community._id))
      .catch((err) => console.error("Delete error:", err));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/api/community-helpers/${community._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        const updated = result.data;
        setCommunity(updated);
        setEditing(false);
        onUpdate(updated);
      })
      .catch((err) => console.error("Update error:", err));
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="community-card">
      {editing ? (
        <form onSubmit={handleUpdate}>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input name="area" value={formData.area} onChange={handleChange} />
          <input
            name="service"
            value={formData.service}
            onChange={handleChange}
          />
          <button type="submit" className="btn primary-btn">
            Save
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="btn"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h2>My Name Is {community.firstName}</h2>
          <p>I Live In {community.area}</p>
          <p>I Work As A {community.service}</p>
          <button className="btn primary-btn" onClick={handleChangeService}>
            Change Service
          </button>
          <button className="btn" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button className="btn danger-btn" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default CommunityCard;
