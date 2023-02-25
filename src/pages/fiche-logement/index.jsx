import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./fiche-logement.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

export default function Index() {
  const params = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get("/locations.json").then((res) => {
        setLocation(res.data.filter((item) => item.id === params.id)[0]);
      });
    };
    getData();
  }, [params]);

  useEffect(() => {
    if (location === undefined) {
      navigate("/404", { state: { message: "Can't get data" } });
    }
  }, [location, navigate]);

  if (location) {
    return (
      <div className={`mt-20 d-flex flex-column justify-content-center px-20`}>
        <Carousel pictures={location.pictures} />

        <div className={`${styles.container}`}>
          <div className={`${styles.containerLocation} d-flex flex-column`}>
            <h1 className={`${styles.titleLocation} font-weight-500 text-primary mt-10`}>{location.title}</h1>
            <span className={`${styles.location} text-primary mt-10`}>{location.location}</span>
            <div className={`d-flex flex-row mt-10`}>
              {location.tags?.map((tag, index) => (
                <span className={`${styles.badge} mr-10  bg-primary text-white font-size-11 font-weight-600 border-radius-5`} key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles.ratingHost}`}>
            <div className={`${styles.rating}`}>
              <Rating rating={location.rating} />
            </div>
            <div className={`${styles.host} d-flex align-items-center `}>
              <span className={`${styles.hostName} text-primary mr-10`}>{location.host?.name}</span>
              <img src={location.host?.picture} className={`${styles.hostPicture}`} alt="" />
            </div>
          </div>
        </div>

        <div className={`${styles.collapse}`}>
          <Collapse title={"Description"} text={location.description} />
          <Collapse title={"Équipements"} list={location.equipments} />
        </div>
      </div>
    );
  }
}
