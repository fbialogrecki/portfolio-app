import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* Możesz tu wstawić logo jako tekst lub obrazek */}
                <a href="/">Filip Białogrecki</a>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#what-i-do">What I do</a></li>
                    <li><a href="#my-work">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.extraIcons}>
                {/* Placeholder dla ikon po prawej (np. motyw, social media) */}
                {/* Użyj ikon SVG lub biblioteki ikon */}
                <div className={styles.iconPlaceholder}></div>
                <div className={styles.iconPlaceholder}></div>
                <div className={styles.iconPlaceholder}></div>
            </div>
        </header>
    );
};

export default Header;