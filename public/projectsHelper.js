const PROJECTS = [
  {
    title: "Cosmies",
    technology: ["Next.js", "Javascript", "SCSS"],
    description:
      "10 species of intergalactic travelers have had to flee their homes, antcipating a crash landing here on Earth it up to YOU to embark on a new adventure to secure their future. an NFT project from the mind of digital artist Sisto",
    challenges:
      "Begining as a start-up between me and two other developers, we sourced a client to create a Move 2 Earn game. A game centered around fitness and the evolution of a 'Dynamic NFT'. There were many challenges faced as both Co-Founder and Lead front end developer. From team cohesion, global schedules, and working in a remote atmosphere. Communication, orginization, and effeciency were of the upmost importance in order to make sure that deadlines could be met. While this project has been indefintely postponed it lead to many lessons about working in a start-up environment. -- UI/UX is sourced from a Figma design provided to me by the in house designer. Creating this frontend really helped ground many React concepts for me like Hooks, Functional Components, State Management, and Component lifecycle.",
    link: "https://comsies-frontend-nextjs-dapp.vercel.app/",
  },
  {
    title: "Smart Contract Lottery",
    technology: ["Hardhat", "Next.Js", "Solidity"],
    description:
      "A decentralized smart contract lottery. Connect your wallet, enter the lottery and the rest is all handled in a decentralized trustless manner to determine a winner!",
    challenges:
      "In a lottery we need a way to get a random winner, also some third party must call functions on a smart contract in order to invoke them. To solve both of these parties we use Chainlink Automation, previously Chainlink Oracles to invoke our functions, and Chainlink VRF to find a verifably random winner. We then hosted this on IPFS using Fleek!",
    link: "https://cool-grass-7457.on.fleek.co/",
  },
  {
    title: "ECDSA",
    technology: ["Node.Js", "React", "REST"],
    description:
      "Grab a private key and sign a transaction! This takes a look at the ecliptic curve digital signature algorithm! ",
    challenges:
      "While this a centralized solution, and has no true provider to provide the private keys, we can still get the gist of whats happening in Public Key Cryptography. We only allow transfers that have been signed for by the purpose who owns the associated address. We are using Ethereum cryptography library this allowed great insight into some of the core fundamentals of how transactions work on Ethereum. As well as giving me experience using a REST API created using Express and Node.js",
    link: "",
  },
  {
    title: "Lofi-Defi",
    technology: ["Hardhat", "Solidity", "OpenZepplin"],
    description:
      "A startup and my first web 3 project, launched on BSC this smart contract aimed to create reflection's for users while avoiding negative price action caused by the swap & liquify function that the famous v1 Safemoon contract suffered from.",
    challenges:
      "Entering web 3 as a developer this was the first smart contract I wrote into production. It achieved over 6000 holders and a 7 figure all time high marketcap. This contract was later audited by TECH AUDIT and passed all security checks.    ",
    link: "https://www.bscscan.com/token/0x17D8519F57450E2B7E6aE1163E0E448322a8aF17#code",
  },
];

export default PROJECTS;
