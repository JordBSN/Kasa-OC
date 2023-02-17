import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function TheHeader() {
  return (
    <header className="d-flex flex-row align-items-center p-20">
      <img className="logo " src={Logo} alt="" />
      <div className="ml-auto font-size-12 font-weight-500">
        <Link to={"/"} className="link text-primary mr-15">
          ACCUEIL
        </Link>
        <Link to={"apropos"} className="link text-primary">À PROPOS</Link>
      </div>
    </header>
  );
}

export default TheHeader;
