import styles from "./rating.module.scss";
import starPrimary from "../../assets/images/starPrimary.svg";
import star from "../../assets/images/star.svg";

export default function Rating(props) {
  function ShowRating() {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<img src={starPrimary} alt="" className={`${styles.star} mr-2`} key={`star-primary-` + i} />);
    }

    if (stars.length < 5) {
      for (let i = 0; i < 5 - stars.length + 1; i++) {
        stars.push(<img src={star} alt="" className={`${styles.star} mr-2`} key={`start-` + i} />);
      }
    }
    return <>{stars}</>;
  }

  return <>{ShowRating()}</>;
}
