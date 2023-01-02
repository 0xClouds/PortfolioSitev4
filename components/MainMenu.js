import styles from "../styles/MainMenu.module.scss";
import RainbowBar from "./00-images/RainbowBar";
import MainNav from "./01-navigation/MainNav";
import InfoContainer from "./InfoContainer";

export default function MainMenu() {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <RainbowBar></RainbowBar>
      </div>
      <MainNav></MainNav>
      <InfoContainer></InfoContainer>
    </div>
  );
}
