import styles from "./thumblerListItem.module.scss";

function ThumblerListItem(props) {
  return (
    <>
      <div className={`${styles.card} p-5`}>
        <img className={`${styles.image} border-radius-10 mb-20`} src={props.location.cover} alt="" />
        <span className={`${styles.title} text-white font-weight-600`}>{props.location.title}</span>
      </div>
    </>
  );
}

export default ThumblerListItem;
