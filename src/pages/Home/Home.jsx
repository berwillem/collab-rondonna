import "./Home.css";
import logo from "../../assets/logo.png";
import { LuFacebook } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";
import { LuYoutube } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <img src={logo} alt="logo" />
          <div className="home-text">
            <h1>
              L’algerie autrement avec <br />
              <span> Rondonna</span>{" "}
            </h1>
            <p>
              Inscrivez-vous pour un partenariat exclusif avec Rondonna 🌍✨.
              Ensemble, <br /> offrons des expériences de voyage inoubliables
              🏞️✈️ et développons nos <br /> opportunités de croissance 📈🤝.
              Rejoignez notre communauté passionnée et <br /> innovante pour
              créer des aventures exceptionnelles 🌟🌐!
            </p>
            <Link to="/subscription" className="btn-link">
              <button>Devenir partenaire</button>
            </Link>
          </div>
          <div className="sociales">
            <a href="" target="_blank">
              <LuFacebook />
            </a>
            <a href="" target="_blank">
              <FiInstagram />
            </a>
            <a href="" target="_blank">
              <TbBrandTiktok />
            </a>
            <a href="" target="_blank">
              <LuYoutube />
            </a>
          </div>
        </div>
        <div className="camel-img"></div>
      </div>
    </>
  );
}
