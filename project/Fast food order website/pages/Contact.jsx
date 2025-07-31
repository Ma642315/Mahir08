import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any questions or feedback!</p>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea rows="5" placeholder="Your message" required />

        <button type="submit" className="btn-orange">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;