import "./SubscriptionDetail.css";
import condition from "../../assets/condition.png";
import ploitique from "../../assets/politique.png";
import contrat from "../../assets/contrat.png";
export default function SubscriptionDetail({ Card }) {
  return (
    <>
      <div className="subscription-detail-container">
        <div className="subscription-detail-content">
          <h1>Vous avait sélectionnez le plan Basic</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            nulla numquam accusantium similique, nesciunt atque aliquid
            laboriosam dolorem ad repudiandae dolorum eaque ducimus molestias!
            Neque dolore eaque assumenda exercitationem adipisci.
          </p>
          <div className="legals">
            <div className="legal">
              <img src={condition} alt="" />
              <div className="legal-text">
                <h4 style={{ color: "#FF2900" }}>Cliquer pour télécharger</h4>
                <h2>Condition général d’utilisation</h2>
              </div>
            </div>
            <div className="legal">
              <img src={ploitique} alt="" />
              <div className="legal-text">
                <h4 style={{ color: "#0066FF" }}>Cliquer pour télécharger</h4>
                <h2>Politique de confidentialité </h2>
              </div>
            </div>
            <div className="legal">
              <img src={contrat} alt="" />
              <div className="legal-text">
                <h4 style={{ color: "#1EB17B" }}>Cliquer pour télécharger</h4>
                <h2>Contrat de partenariat</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card"></div>
      </div>
    </>
  );
}
