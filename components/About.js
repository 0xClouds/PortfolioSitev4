import styles from "../styles/About.module.scss";
import Spinner from "./Spinner";

export default function About() {
  return (
    <div
      className={styles.main}
      onScroll={() => {
        console.log("hi");
      }}
    >
      <div className={styles.description}>
        <h1 className={styles.header}>Software Engineer</h1>
        <span> &#60; Front-End | Blockchain &gt; </span>
      </div>
      <p className={styles.aboutInfo}>
        At 14 almost 12 years ago my friends and I were introduced to BTC, At
        the time we never imagined cryptocurrencies would evovle into the world
        we see today. This lead to a life long passion for blockchain
        technology.
      </p>

      <Spinner></Spinner>
      <p className={styles.aboutInfo}>
        At 14 almost 12 years ago my friends and I were introduced to BTC, At
        the time we never imagined cryptocurrencies would evovle into the world
        we see today. This lead to a life long passion for blockchain
        technology.
      </p>
    </div>
  );
}
