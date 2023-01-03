import { useState } from "react";
import styles from "../../styles/ListItem.module.scss";
export default function ListItem({
  text,
  index,
  setCurrentIndex,
  currentIndex,
}) {
  return (
    <li
      className={styles.listItem}
      onClick={() => {
        setCurrentIndex(index);
      }}
    >
      <span>&#60;</span>{" "}
      <span className={currentIndex === index ? styles.active : null}>
        {text}
      </span>{" "}
      <span>&gt;</span>
    </li>
  );
}
