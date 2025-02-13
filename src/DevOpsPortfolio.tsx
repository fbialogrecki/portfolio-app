import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import WhatIDo from "./WhatIDo";
import MyWork from "./MyWork";
import Contact from "./Contact";
import styles from "./DevOpsPortfolio.module.css";

const DevOpsPortfolio: React.FC = () => {
  const navigationItems = ["Home", "What I Do?", "My Work", "Contact"];
  const profileData = {
    name: "Filip Białogrecki",
    role: "DevOps Engineer",
    description:
      "Building reliable, scalable, and automated infrastructure to power modern applications.",
  };
  const whatIDoItems = [
    {
      title: "Infrastructure as Code",
      description:
        "Automating infrastructure deployment using tools like Terraform and CloudFormation.",
    },
    {
      title: "Continuous Integration/Continuous Deployment",
      description:
        "Implementing CI/CD pipelines for seamless software delivery.",
    },
    {
      title: "Cloud Architecture",
      description:
        "Designing and managing scalable cloud solutions on AWS, Azure, and GCP.",
    },
  ];
  const myWorkItems = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "http://b.io/project1.jpg",
      projectUrl: "#",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "http://b.io/project2.jpg",
      projectUrl: "#",
    },
  ];

  return (
    <div className={styles.websiteDesign}>
      <div className={styles.mainContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e13f67525aa249deb28e692ee20999fb/61632576961869e422c836b2aae9a5a4788c6b0c5b69867289a7c580fbf3a8a3?apiKey=512f4e1a1ea44fa9999a0d071ff8f0f5&"
          alt=""
          className={styles.backgroundImage}
        />
        <Header navigationItems={navigationItems} />
        <Profile {...profileData} />
      </div>
      <WhatIDo items={whatIDoItems} />
      <MyWork items={myWorkItems} />
      <Contact />
    </div>
  );
};

export default DevOpsPortfolio;