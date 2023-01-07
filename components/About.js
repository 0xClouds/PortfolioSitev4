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
        I am software engineer specalizing in front-end development. My passion
        for decentralized techonologies began in 2011 and lead me to becoming a
        mentee to a senior front-end developer. Today I enjoy building front-end
        experiences with modern technologies, and creating smart contracts.
      </p>

      <Spinner></Spinner>
      <p className={styles.aboutInfo}>
        I am partipating in startups, founding new project ideas with other
        developers, and am a active and core member to the Web 3 community in
        San Diego!
        <br></br>
        <br></br>I am freelancing as a developer and a Mentor at ETH SD
        supporting students through the Alchemy Uni cirriculum. I speak at
        confrences and give education on the tools needed to become a developer.
        Today I am looking to break into the industry as a software engineer
        using my skills to become an asset to a team!
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
