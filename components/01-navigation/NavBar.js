import styles from "../../styles/NavBar.module.scss";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main}>
      <div className={styles.navContainer} onClick={handleClick}>
        <div
          className={` ${isOpen ? styles.active : undefined} ${styles.bar1} ${
            styles.bar
          }`}
        ></div>
        <div
          className={` ${isOpen ? styles.active : undefined} ${styles.bar2}  ${
            styles.bar
          }`}
        ></div>
        <div
          className={` ${isOpen ? styles.active : undefined} ${styles.bar3}  ${
            styles.bar
          }`}
        ></div>
      </div>
      <div className={` ${styles.menu} ${isOpen ? styles.slide : styles.hide}`}>
        {isOpen ? (
          <ul className={styles.navList}>
            <a>
              <li>About</li>
            </a>
            <a>
              <li>Projects</li>
            </a>
            <a>
              <li>Contact</li>
            </a>
            <a>
              <li>Read</li>
            </a>
            <a>
              <li>Rmorning96@proton.me</li>
            </a>
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    </div>
  );
}
