import styles from "../styles/Header.module.scss";
import WebThreeLogo from "./00-images/WebThreeLogo";
export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <WebThreeLogo></WebThreeLogo>
      </div>
      <div>_ Building Tomorrow _</div>
      <div className={styles.author}>by Ryan Morning | Cloud</div>
    </div>
  );
}
