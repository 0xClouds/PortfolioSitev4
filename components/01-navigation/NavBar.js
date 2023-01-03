import styles from "../../styles/NavBar.module.scss";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main} style={isOpen ? { position: "fixed" } : null}>
      <div className={styles.navContainer} onClick={handleClick}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
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
