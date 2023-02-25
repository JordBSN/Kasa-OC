import styles from "./bulletPoint.module.scss";

export default function BulletPoint(props) {
  const index = props.index;
  const current = props.current;

  return <div className={`${styles.bulletPoints} ${index === current ? "bg-primary" : "bg-light"} mr-5 cursor-pointer`}></div>;
}
