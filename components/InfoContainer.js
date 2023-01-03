import styles from "../styles/InfoContainer.module.scss";
import WebThreeLogo from "./00-images/WebThreeLogo";
import projects from "../public/projectsHelper";
import { useLayoutEffect, useState } from "react";

export default function InfoContainer({ currentIndex }) {
  const [windowWidth, setWindowWidth] = useState();

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <div className={styles.main}>
      {projects.map((project, index) => (
        <a
          key={index}
          className={`${
            currentIndex === index ? styles.active : styles.inactive
          }   ${styles.link} `}
          href={
            windowWidth < 1500
              ? project.link
              : currentIndex === index
              ? project.link
              : null
          }
        >
          <div className={styles.header}>
            <div className={styles.projectImg}>
              <WebThreeLogo></WebThreeLogo>
            </div>
            <h3 className={styles.headerText}> {project.title}</h3>
            <ul className={styles.languagesList}>
              {project.technology.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.body}>
            <p className={styles.infoText}>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
