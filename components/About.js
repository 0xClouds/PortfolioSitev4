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
        12 years ago I was 14 when my friends and I were introduced to BTC.
        Enthralled with the cyberpunk-esque era of cryptocurrencies it became a
        core pillar of my identity. However I never imagined decentralized
        technologies would come this far.
      </p>

      <Spinner></Spinner>
      <p className={styles.aboutInfo}>
        Today I am on the never ending path of becoming a software engineer. I
        began as a mentee for a senior front-end developer. I gravitated towards
        front-end technologies and later blockchain. My goal is to be a
        blockchain engineer. Right now I am learning solidity, and perfecting my
        front-end skills.
        <br></br> <br></br> I have participated in startups being the lead smart
        contract engineer, built NFT projects, spoken at NFT conferences, joined
        fantastic communities like BAYC/MAYC & Developer Dao, and currently a
        mentor with Ethereum San Diego supporting students through the Alchemy
        University curriculum.
        <br></br> <br></br>
      </p>
      <h1 className={styles.header}>Technologies</h1>
      <ul className={styles.techList}>
        <li className={styles.listItem}>Next.js/React</li>
        <li className={styles.listItem}>Javascript/ES6+</li>
        <li className={styles.listItem}>Node.js</li>
        <li className={styles.listItem}>Typescript</li>
        <li className={styles.listItem}>Solidity</li>
        <li className={styles.listItem}>Hardhat</li>
      </ul>
    </div>
  );
}
