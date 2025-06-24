import React from "react";
import "../shared/styles.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you. Whether you have questions, need
          support, or want to get involved, reach out anytime.
        </p>
      </section>

      <section className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
