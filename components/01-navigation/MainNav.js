import styles from "../../styles/MainNav.module.scss";
import ListItem from "./ListItem";

export default function MainNav({ setCurrentIndex, currentIndex }) {
  return (
    <div className={styles.main}>
      <ul className={styles.mobileNavList}>
        <ListItem text="Projects" setCurrentIndex={undefined}></ListItem>
      </ul>
      {/* Desktop Navigation */}
      <ul className={styles.desktopNavList}>
        <ListItem
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          index={0}
          text="Cosmies"
        ></ListItem>
        <ListItem
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          index={1}
          text="Lottery"
        ></ListItem>
        <ListItem
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          index={2}
          text="ECDSA"
        ></ListItem>
        <ListItem
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          index={3}
          text="LOFI-DEFI"
        ></ListItem>
      </ul>
    </div>
  );
}
