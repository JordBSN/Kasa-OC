import { useState, useEffect } from "react";
import styles from "./collapse.module.scss";
import arrowDown from "../../assets/images/arrowDown.svg";
import arrowUp from "../../assets/images/arrowUp.svg";

export default function Collapse(props) {
  const [collapse, setCollapse] = useState(false);
  function handleCollapse(active) {
    setCollapse(active);
  }
  return (
    <div className={`${styles.collapse} w-100`}>
      <h2 className={`${styles.title} d-flex justify-content-between align-items-center p-10 mt-20 border-radius-5 bg-primary text-white font-size-13 font-weight-500`}>
        {props.title}
        <button className={"btn-transparent"} onClick={() => handleCollapse(!collapse)}>
          <img src={collapse ? arrowUp : arrowDown} />
        </button>
      </h2>
      {collapse && (
        <div className={"bg-light mt-0 py-20 px-10 border-radius-5"}>
          {props.text && <p className={` m-0 p-0 font-size-14 font-weight-400 text-primary`}>{props.text}</p>}
          {props.list && props.list.map((listItem, index) => <li key={index} className={`font-size-14 mb-5 font-weight-400 text-primary`}>{listItem}</li>)}
        </div>
      )}
    </div>
  );
}
