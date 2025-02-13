import React from "react";
import styles from "./DevOpsPortfolio.module.css";

interface WhatIDoItem {
  title: string;
  description: string;
}

interface WhatIDoProps {
  items: WhatIDoItem[];
}

const WhatIDo: React.FC<WhatIDoProps> = ({ items }) => {
  return (
    <section id="what-i-do" className={styles.whatIDoSection}>
      <div className={styles.whatIDoContainer}>
        <h2 className={styles.whatIDoTitle}>What I Do?</h2>
        <div className={styles.whatIDoContent}>
          {items.map((item, index) => (
            <div key={index} className={styles.whatIDoItem}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
