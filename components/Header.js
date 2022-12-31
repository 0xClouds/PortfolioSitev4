import Image from "next/image";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src="/logo/Logo3White.png"
          alt="Frontier"
          fill
          className={styles.logoImg}
        ></Image>
      </div>
      <div>_ Building Tomorrow _</div>
      <div className={styles.author}>by Ryan Morning | Cloud</div>
    </div>
  );
}
