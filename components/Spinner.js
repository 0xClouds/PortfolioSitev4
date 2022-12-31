import styles from "../styles/Spinner.module.scss";
import Image from "next/image";
import { useEffect } from "react";
export default function Spinner() {
  useEffect(() => {
    console.log(window.scrollY);
  });
  return (
    <div className={styles.main}>
      <Image
        src="/WhiteSpinner.png"
        alt="Spiral spinner"
        fill
        className={styles.spinnerImg}
      ></Image>
    </div>
  );
}
