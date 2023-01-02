import styles from "../styles/About.module.scss";
import Spinner from "./00-images/Spinner";

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
        Today I am a passionate front-end engineer focusing on blockchain
        technologies. I enjoy building smart contracts and am currently learning
        solidity. I am positioning myself to become a fullstack blockchain
        engineer.
        <br></br> <br></br> I have partcipated in startups being the lead smart
        contract engineer, built NFT projects, spoken at NFT confrences, joined
        fantastic communities like BAYC/MAYC & Developer Dao, and a mentor with
        Ethereum San Diego supporting students through the Alchemy University
        ciriculum.
      </p>
    </div>
  );
}
