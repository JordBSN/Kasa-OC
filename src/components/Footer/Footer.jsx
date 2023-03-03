import React, { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import LogoFooter from "../../assets/images/LogoFooter.svg";

function CurrentYear() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span>{year}</span>;
}

function Index() {
  return (
    <footer>
      <div className={`${styles.footerContainer}`}>
        <img src={LogoFooter} alt="Logo" />
        <span>&copy; {CurrentYear()} Kasa. Tous droits réservés</span>
      </div>
    </footer>
  );
}

export default Index;
