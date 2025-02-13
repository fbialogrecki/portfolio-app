import React from "react";
import styles from "./DevOpsPortfolio.module.css";

interface ProfileProps {
  name: string;
  role: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, description }) => {
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <div className={styles.profileTextContainer}>
          <div className={styles.greetingContainer}>Hi, I'm {name}</div>
          <div className={styles.roleContainer}>
            <h1 className={styles.roleTitle}>{role}</h1>
            <p className={styles.roleDescription}>{description}</p>
          </div>
        </div>
        <div className={styles.actionButtonsContainer}>
          <div className={styles.buttonsContainer}>
            <a href="#my-work" className={styles.viewWorkButton}>
              View My Work
            </a>
            <a href="/cv.pdf" download className={styles.downloadCvButton}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
