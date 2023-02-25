import styles from "./bulletPoint.module.scss";

export default function BulletPoint(props) {
  const index = props.index;
  const current = props.current;

  function handleClickEmitIndex() {
    props.onClick(props.index);
  }

  return <div onClick={handleClickEmitIndex} className={`${styles.bulletPoints} ${index === current ? "bg-primary" : "bg-light"} mr-5 cursor-pointer`}></div>;
}
