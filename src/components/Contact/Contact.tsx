import React from 'react';
import styles from './Contact.module.css';
// Rozważ użycie biblioteki ikon, np. react-icons
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.subtitle}>
                Have a question or a project in mind? Let's connect!
            </p>
            <div className={styles.socialLinks}>
                {/* Placeholdery - Zastąp prawdziwymi linkami i ikonami */}
                <a href="#" className={styles.socialIcon} aria-label="GitHub">
                    {/* <FaGithub /> */} G {/* Placeholder */}
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    {/* <FaLinkedin /> */} L {/* Placeholder */}
                </a>
                <a href="mailto:your.email@example.com" className={styles.socialIcon} aria-label="Email">
                    {/* <FaEnvelope /> */} E {/* Placeholder */}
                </a>
                {/* Dodaj więcej ikon/linków według potrzeb */}
            </div>
        </section>
    );
};

export default Contact;