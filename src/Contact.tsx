import React, { useState } from "react";
import styles from "./DevOpsPortfolio.module.css";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <p className={styles.contactDescription}>
            Have a question or a project in mind? Feel free to reach out.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formFieldsContainer}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={styles.visuallyHidden}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.visuallyHidden}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="message" className={styles.visuallyHidden}>
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
                className={styles.textareaField}
              />
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
