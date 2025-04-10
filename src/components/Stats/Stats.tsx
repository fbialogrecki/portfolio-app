import React from 'react';
import styles from './Stats.module.css';

interface StatItemProps {
    value: string | number;
    label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <div className={styles.statItem}>
        <span className={styles.statValue}>{value}</span>
        <span className={styles.statLabel}>{label}</span>
        <div className={styles.statBar}></div> {/* Placeholder for the bar */}
    </div>
);


const Stats: React.FC = () => {
    return (
        <section id="what-i-do" className={styles.statsSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.description}>
                    <h2>Syncing Systems & Sounds</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className={styles.statistics}>
                    <StatItem value={8} label="Years of Service" />
                    <StatItem value={8} label="Companies" />
                    <StatItem value={12} label="Projects" />
                    <p className={styles.techStackLabel}>Tech stack</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;