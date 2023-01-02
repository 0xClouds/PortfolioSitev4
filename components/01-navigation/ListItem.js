import { useState } from "react";
import styles from "../../styles/ListItem.module.scss";
export default function ListItem({ text }) {
  const [active, setIsActive] = useState(false);
  return (
    <li
      className={styles.listItem}
      onClick={() => {
        setIsActive(!active);
      }}
    >
      <span>&#60;</span>{" "}
      <span className={active ? styles.active : null}>{text}</span>{" "}
      <span>&gt;</span>
    </li>
  );
}
