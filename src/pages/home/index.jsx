import styles from "./home.module.scss";
import imageWelcome from "../../assets/images/imageWelcome.png";
import Banner from "../../components/Banner/Banner";
import ThumblerList from "../../components/Thumbler/ThumblerList/ThumblerList";

export default function Index() {
  return (
    <>
      <div className={`${styles.container} px-20`}>
      <Banner image={imageWelcome} text={'Chez vous, partout et ailleurs'}/>
        <ThumblerList />
      </div>
    </>
  );
}
