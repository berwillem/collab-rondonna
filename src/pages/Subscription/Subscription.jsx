import "./Subscription.css";
import alien1 from "../../assets/Alien-1.svg";
import alien2 from "../../assets/Alien-2.svg";
import alien3 from "../../assets/Alien-3.svg";
import { FaCircleCheck } from "react-icons/fa6";
export default function Subscription() {
  return (
    <>
      <div className="subscription-container">
        <div className="subscription-header">
          <h2>Bienvenue sur Rondonna</h2>
          <h1>
            Sélectionnez votre forfait annuel et <br />
            bénéficiez des avantages
          </h1>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-title">
              <h3>
                <img src={alien1} alt="alien" />
                Basic
              </h3>
            </div>
            <h2>Ce que vous obtiendrez</h2>
            <ul>
              <li>
                <FaCircleCheck className="checked" /> Visibilité sur la
                plateforme
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Système de réservation en ligne
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Accès au tableau de bord
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Profil d'entreprise personnalisable
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Notifications par e-mail
              </li>
            </ul>
            <h1>
              2 000DZD/ <span>mois</span>
            </h1>
            <button>Choisir</button>
          </div>
          <div className="card" id="special-card">
            <div className="card-title">
              <h3>
                <img src={alien2} alt="alien" />
                Standard
              </h3>
            </div>
            <h2>Ce que vous obtiendrez</h2>
            <ul>
              <li>
                <FaCircleCheck /> Toutes les options du Plan Basique, plus
              </li>
              <li>
                <FaCircleCheck />
                Visibilité sur les réseaux sociaux
              </li>
              <li>
                <FaCircleCheck />
                Système de réservation avancé
              </li>
              <li>
                <FaCircleCheck />
                Tableau de bord amélioré
              </li>
              <li>
                <FaCircleCheck />
                Support client standard
              </li>
            </ul>
            <h1>
              1 000DZD + 15%/ <span>mois</span>
            </h1>
            <button>Choisir</button>
          </div>
          <div className="card">
            <div className="card-title">
              <h3>
                <img src={alien3} alt="alien" />
                Premieum
              </h3>
            </div>
            <h2>Ce que vous obtiendrez</h2>
            <ul>
              <li>
                <FaCircleCheck className="checked" /> Proposition de
                collaboration B2B
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Visibilité maximale
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Création de contenu pour les réseaux sociaux
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Système de réservation complet
              </li>
              <li>
                <FaCircleCheck className="checked" />
                Support client prioritaire
              </li>
            </ul>
            <h1>
              5 000DZD+10%/ <span>mois</span>
            </h1>
            <button>Choisir</button>
          </div>
        </div>
      </div>
    </>
  );
}
