import styles from "../styles/DesktopProjectMenu.module.scss";
import MainNav from "./01-navigation/MainNav";
import InfoContainer from "../components/InfoContainer";
import WebThreeLogo from "./00-images/WebThreeLogo";
import RainbowBar from "./00-images/RainbowBar";
import { useState } from "react";

export default function DesktopProjectMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <RainbowBar></RainbowBar>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.navContainer}>
          <div className={styles.imgContainer}>
            <WebThreeLogo></WebThreeLogo>
          </div>
          <MainNav
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
          ></MainNav>
        </div>

        <div className={styles.infoContainer}>
          <InfoContainer currentIndex={currentIndex}></InfoContainer>
        </div>
      </div>
    </div>
  );
}
