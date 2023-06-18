import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact({
      name: "",
      email: "",
      message: ""
    });

    setMessage(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  };

  return (
    <div id="contact" className="contact">
      <div className="left">
        <img src="assets/contact_image.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xpzklqjz" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={contact.name}
            placeholder="Your name"
            required
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={contact.email}
            placeholder="Your email"
            required
          />
          <textarea
            onChange={handleChange}
            name="message"
            value={contact.message}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thanks for dropping a message. I'll reply ASAP😊!</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
