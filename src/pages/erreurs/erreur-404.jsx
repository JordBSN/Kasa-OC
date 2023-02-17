import { Link } from "react-router-dom";
import styles from "./erreur-404.module.scss";
import Header from "../../components/TheHeader";

export default function Erreur404() {
  return (
    <>
        <Header />
      <div className={`${styles.container} d-flex flex-column  align-items-center text-primary`}>
        <h1 className={`${styles.title} font-weight-700`}>404</h1>
        <span className={`${styles.message} font-weight-500 text-center`}> Oops! La page que vous demandez n'existe pas.</span>
        <Link to={"/"} className={`${styles.linkBackHome} text-primary mr-15`}>
          Retournez sur la page d'accueil
        </Link>
      </div>
    </>
  );
}
