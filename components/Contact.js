import styles from "../styles/Contact.module.scss";
import WebThreeLogo from "./00-images/WebThreeLogo";
import FrontierLogo from "./00-images/FrontierLogo";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>
          TOGETHER WE CAN <span style={{ color: "#50f989" }}>BUILD</span> THE
          NEXT
        </p>
        <div className={styles.imgContainer}>
          <FrontierLogo></FrontierLogo>
        </div>
        <div className={styles.svg}>
          <svg viewBox="0 0 100 100" fill="white" height="100px">
            <path d="M55.30 8.05C55.50 4.95 52.40 3.45 50.00 3.45C47.60 3.45 44.70 4.85 44.70 7.95L48.70 82.65C43.50 72.65 27.70 48.55 17.90 48.55C12.50 48.55 10.10 53.75 10.10 57.65C34.20 63.85 46 83.05 49.80 94.15L50.20 94.15C53.90 83.05 65.70 63.85 89.90 57.65C89.90 53.75 87.40 48.55 82 48.55C72.20 48.55 56.40 72.65 51.20 82.65Z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.contactBar}>
        <ul className={styles.contactList}>
          <a className={styles.link} href="https://twitter.com/Clouds9x">
            <li className={styles.listItem}>TWITTER</li>
          </a>
          {/* <a
            className={styles.link}
            href="https://mirror.xyz/0x0e086ddA48aC11cA5957a5933A5FDF76453886ED"
          >
            <li className={styles.listItem}>READ</li>
          </a> */}
          <a className={styles.link} href="https://github.com/0xClouds">
            <li className={styles.listItem}> GITHUB</li>
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/ryan-morning/"
          >
            <li className={styles.listItem}>LINKEDIN</li>
          </a>
          {/* <a className={styles.link}>
            <li className={styles.listItem}>Rmorning96@proton.me</li>
          </a> */}
        </ul>
      </div>
    </div>
  );
}
