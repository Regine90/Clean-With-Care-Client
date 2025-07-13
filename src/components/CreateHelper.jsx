import React from "react";
import { useNavigate } from "react-router-dom";

function CreateHelper() {
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      area: e.target.area.value,
      service: e.target.service.value,
    };

    const url =
      import.meta.env.VITE_API_BASE_URL + "/api/community-helpers/create/new";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Helper created:", result);
        navigate("/find");
      })
      .catch((error) => {
        console.error("Error creating helper:", error);
      });
  };

  return (
    <main>
      <form onSubmit={handleForm}>
        <div className="create">
          <h1>Create Community Helper</h1>

          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="e.g., Boston, MA"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service:</label>
            <input
              type="text"
              id="service"
              name="service"
              placeholder="e.g., Cleaning"
              required
            />
          </div>

          <div className="form-button">
            <button type="submit" className="btn primary-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default CreateHelper;
