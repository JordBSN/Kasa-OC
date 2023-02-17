import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./thumblerList.module.scss";
import ThumblerListItem from "../ThumblerListItem/ThumblerListItem";

export default function ThumblerList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/locations.json");
      setLocations(response.data);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {locations.map((location) => (
        <div key={location.id}>
          <Link to={`/logement/${location.id}`} relative="patch">
            <ThumblerListItem keys={location.id} location={location} />
          </Link>
        </div>
      ))}
    </div>
  );
}
