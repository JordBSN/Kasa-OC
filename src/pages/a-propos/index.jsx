import styles from "./a-propos.module.scss";
import Collapse from "../../components/Collapse/Collapse";

export default function Index() {
  const aboutList = [
    {
      title: "Fiabilité",
      text:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les " +
        "informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      text:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage " +
        "entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous " +
        "avez la moindre question.",
    },
    {
      title: "Sécurité",
      text:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères " +
        "de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier " +
        "que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className={`${styles.aboutContainer} d-flex flex-column align-items-center p-20`}>
      <div className={`${styles.aboutBanner} border-radius-10`} />
      {aboutList.map((item, index) => (
        <div key={index} className={`${styles.containerCollapse} text-center`}>
          <Collapse title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  );
}
