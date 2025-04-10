import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroContent}>
                <p className={styles.greeting}>Hi, I'm Filip Białogracki</p>

                {/* Wrapper dla tytułu i podtytułu */}
                <div className={styles.titleSubtitleWrapper}>
                    <h1 className={styles.title}>DevOps Engineer</h1>
                    <p className={styles.subtitle}>
                        Building reliable, scalable, and automated infrastructure to power modern applications.
                    </p>
                </div>

                <div className={styles.ctaButtons}>
                    <button className="button-primary">View My Work</button>
                    <button className="button-secondary">Download My CV</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;