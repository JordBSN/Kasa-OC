import styles from "./banner.module.scss";

export default function Banner(props){
const {image, text} = props;


 return (
     <div className={styles.banner}>
         <img className={`${styles.imgBanner}`} src={props.image} />
         <span className={`${styles.textBanner} text-white font-weight-600`}>{text}</span>
     </div>
 )
}
