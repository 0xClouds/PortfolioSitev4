import styles from "../../styles/MainNav.module.scss";
import ListItem from "./ListItem";

export default function MainNav() {
  return (
    <div className={styles.main}>
      <ul className={styles.navList}>
        <ListItem text="Projects"></ListItem>
      </ul>
    </div>
  );
}
