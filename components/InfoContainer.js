import styles from "../styles/InfoContainer.module.scss";
import WebThreeLogo from "./00-images/WebThreeLogo";
import projects from "../public/projectsHelper";

export default function InfoContainer({ headerText }) {
  return (
    <div className={styles.main}>
      {projects.map((project, index) => (
        <a key={index} className={styles.link} href={project.link}>
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
