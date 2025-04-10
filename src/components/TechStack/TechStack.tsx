import React from 'react';
import styles from './TechStack.module.css';

// Przykład: Liczba placeholderów
const logoCount = 8;

const TechStack: React.FC = () => {
    return (
        <section id="my-work" className={styles.techStackSection}>
            <h2 className={styles.title}>I've been working with</h2>
            <div className={styles.logosContainer}>
                {/* Placeholdery dla logotypów - zastąp prawdziwymi obrazkami/ikonami */}
                {Array.from({ length: logoCount }).map((_, index) => (
                    <div key={index} className={styles.logoPlaceholder}>
                        {/* <img src={`/images/tech-logo-${index}.png`} alt={`Tech ${index + 1}`} /> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;