import { useState, useEffect } from "react";
import styles from "./carousel.module.scss";
import arrowRight from "../../assets/images/arrowRight.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";
export default function Carousel(props) {
  const pictures = props.pictures;
  const [current, setCurrent] = useState(0);

  function handleClickPrevious() {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  }
  function handleClickNext() {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  }

  function buttonLeft() {
    if (pictures?.length > 1) {
      return (
        <button className={`${styles.arrow} ${styles.arrow_left}`} onClick={handleClickPrevious}>
          <img src={arrowLeft} className={`${styles.arrow_icon}`} alt="" />
        </button>
      );
    }
  }

  function buttonRight() {
    if (pictures?.length > 1) {
      return (
        <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={handleClickNext}>
          <img src={arrowRight} className={`${styles.arrow_icon}`} alt="" />
        </button>
      );
    }
  }

  return (
    <>
      <div className={`${styles.carousel}`}>
        {buttonRight()}
        {buttonLeft()}
        {pictures?.map(
          (picture, index) =>
            index === current && (
              <img
                className={`${styles.carouselImage} border-radius-10`}
                key={index}
                src={picture}
              />
            )
        )}
      </div>
    </>
  );
}
