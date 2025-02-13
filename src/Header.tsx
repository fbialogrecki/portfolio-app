import React from "react";
import styles from "./DevOpsPortfolio.module.css";

interface HeaderProps {
  navigationItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.navigationContainer}>
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={styles.navLink}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className={styles.socialIconsContainer}>
          <a
            href="mailto:contact@example.com"
            className={styles.socialIconLink}
            aria-label="Email"
          >
            <div className={styles.socialIconWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e13f67525aa249deb28e692ee20999fb/fe0846320257ba347d10dca7c326994bb4f6b18060d445efc52ff21ed3c06549?apiKey=512f4e1a1ea44fa9999a0d071ff8f0f5&"
                alt=""
                className={styles.socialIcon}
              />
            </div>
          </a>
          <a
            href="https://github.com/username"
            className={styles.socialIconLink}
            aria-label="GitHub"
          >
            <div className={styles.socialIconWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e13f67525aa249deb28e692ee20999fb/75acaeede601af341614f9e2849433326fa6fb450107418bb79a20f6808ebfff?apiKey=512f4e1a1ea44fa9999a0d071ff8f0f5&"
                alt=""
                className={styles.socialIcon}
              />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/username"
            className={styles.socialIconLink}
            aria-label="LinkedIn"
          >
            <div className={styles.socialIconWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e13f67525aa249deb28e692ee20999fb/2e2e3566e92b0c5f98ab15fb4c72435918ec8a62b6f1f4f53ce9974f8065a482?apiKey=512f4e1a1ea44fa9999a0d071ff8f0f5&"
                alt=""
                className={styles.socialIcon}
              />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
