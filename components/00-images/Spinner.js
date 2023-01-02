import styles from "../../styles/Spinner.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Spinner() {
  const spinner = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [spinner]);

  const handleScroll = (e) => {
    if (!spinner.current) return;
    const topPosition = spinner.current.getBoundingClientRect().top;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (topPosition < scrollPosition) {
      spinner.current.style.transform =
        "rotate(" + window.scrollY * 0.2 + "deg)";
    }
  };

  return (
    <div className={styles.main}>
      <Image
        src="/WhiteSpinner.png"
        alt="Spiral spinner"
        fill
        className={styles.spinnerImg}
        ref={spinner}
      ></Image>
    </div>
  );
}
