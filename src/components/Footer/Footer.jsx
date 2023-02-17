import styles from "./footer.module.scss";
import LogoFooter from "../../assets/images/LogoFooter.svg";

function Index() {
  return (
    <footer>
      <div className={`${styles.footerContainer}`}>
        <img src={LogoFooter} alt="Logo" />
        <span>&copy; 2022 Kasa. Tous droits réservés</span>
      </div>
    </footer>
  );
}

export default Index;
