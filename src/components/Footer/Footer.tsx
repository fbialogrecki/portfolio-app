import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Dynamiczny rok

    return (
        <footer className={styles.footer}>
            <p>
                &copy; {currentYear} Filip Białogrecki.
                {/* Możesz dodać "Designed by ..." jeśli chcesz */}
                {/* Designed by [Twoje Imię/Nazwa] */}
            </p>
        </footer>
    );
};

export default Footer;