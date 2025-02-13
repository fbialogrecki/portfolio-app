import React from "react";
import styles from "./DevOpsPortfolio.module.css";

interface WorkItem {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface MyWorkProps {
  items: WorkItem[];
}

const MyWork: React.FC<MyWorkProps> = ({ items }) => {
  return (
    <section id="my-work" className={styles.myWorkSection}>
      <div className={styles.myWorkContainer}>
        <h2 className={styles.myWorkTitle}>My Work</h2>
        <div className={styles.myWorkContent}>
          {items.map((item, index) => (
            <a key={index} href={item.projectUrl} className={styles.myWorkItem}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.workItemImage}
              />
              <div className={styles.workItemInfo}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
