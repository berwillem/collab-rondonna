import  { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from 'react-modal';
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaCircleCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import "./SubscriptionDetail.css";
import condition from "../../assets/condition.png";
import ploitique from "../../assets/politique.png";
import alien1 from "../../assets/Alien-1.svg";
import alien2 from "../../assets/Alien-2.svg";
import alien3 from "../../assets/Alien-3.svg";
import contrat from "../../assets/contrat.png";
import dhbya from "../../assets/dhbya.png";
import repete from "../../assets/repeat.png";
import truck from "../../assets/truck.png";
import logoLigne from "../../assets/logo-ligne.png";

const customStyles = {
  content: {
    top: '20px',
    left: 'auto',
    right: '10px',
    bottom: 'auto',
    zIndex: 40,
    height: "96%",
    width: "35%",
    borderRadius: 32,
    padding: 0
  },
};

export default function SubscriptionDetail() {
  const [clickedQuestions, setClickedQuestions] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [payement, setPayement] = useState(false);
  const { detail } = useParams();
  const formRef = useRef();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const subscriptionPlans = [
    {
      title: "Basic",
      image: alien1,
      benefits: [
        "Visibilité sur la plateforme",
        "Système de réservation en ligne",
        "Accès au tableau de bord",
        "Profil d'entreprise personnalisable",
        "Notifications par e-mail"
      ],
      price: "2 000DZD/ ",
    },
    {
      title: "Standard",
      image: alien2,
      benefits: [
        "Toutes les options du Plan Basique, plus",
        "Visibilité sur les réseaux sociaux",
        "Système de réservation avancé",
        "Tableau de bord amélioré",
        "Support client standard"
      ],
      price: "1 000DZD + 15%/ ",
    },
    {
      title: "Premium",
      image: alien3,
      benefits: [
        "Proposition de collaboration B2B",
        "Visibilité maximale",
        "Création de contenu pour les réseaux sociaux",
        "Système de réservation complet",
        "Support client prioritaire"
      ],
      price: "5 000DZD + 10%/ ",
    }
  ];

  const selectedPlan = subscriptionPlans.find(plan => plan.title.toLowerCase() === detail.toLowerCase());

  const handleClicked = (index) => {
    if (clickedQuestions.includes(index)) {
      setClickedQuestions(clickedQuestions.filter(item => item !== index));
    } else {
      setClickedQuestions([...clickedQuestions, index]);
    }
  };

  const qst = [
    { qst: "Toutes les options du Plan Basique", reponse: "un système de réservation en ligne sécurisé, et un tableau de bord intuitif pour gérer vos réservations. Personnalisez votre profil avec des photos et descriptions, et recevez des notifications par e-mail pour chaque nouvelle réservation" },
    { qst: "Visibilité sur les réseaux sociaux", reponse: "Bénéficiez d'une promotion sur nos comptes de réseaux sociaux pour augmenter votre visibilité et atteindre un public plus large. Profitez de notre présence en ligne pour attirer plus de clients potentiels." },
    { qst: "Système de réservation avancé", reponse: "Accédez à des fonctionnalités de réservation supplémentaires, telles que la personnalisation des options de réservation et la gestion des paiements. Offrez une expérience de réservation fluide et professionnelle à vos clients." },
    { qst: "Tableau de bord amélioré", reponse: "Utilisez des outils de gestion avancés pour une analyse plus approfondie de vos performances. Obtenez des rapports détaillés, suivez les tendances de réservation et optimisez vos opérations quotidiennes." },
    { qst: "Support client standard", reponse: "Bénéficiez d'une assistance par e-mail et téléphone pour résoudre rapidement vos problèmes et répondre à vos questions. Notre équipe est là pour vous aider à tirer le meilleur parti de nos outils." }
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append('payment_method', payement ? 'Cash on delivery' : 'Virement bancaire');
    formData.append('amount', selectedPlan.price);
    formData.append('detail', selectedPlan.title);
  formData.append('subject', ' Inscription agence de voyage');
    const emailData = Object.fromEntries(formData.entries());
   
    
    emailjs.send('service_sntmbgl', 'template_vn2hwhj', emailData, 'Elrkao9F6Klan9slr')
      .then((result) => {
        console.log(result.text);
        alert("Email envoyé avec succès !");
      }, (error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi de l'email. Veuillez réessayer.");
      });
  };

  return (
    <>
      <div className="subscription-detail-container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <form className="general-form" ref={formRef} onSubmit={sendEmail}>
         <div className="top-modal">
            <IoClose size={25} onClick={closeModal} />
            <h3 className="title-modal">Sélectionnez votre méthode de paiement</h3>
            <span></span>
          </div>
          <div className="montant">
            <div className="icon-montant">
              <FiDollarSign size={25} />
            </div>
            <div className="montant-text">
              <p>montant</p>
              <h2>{selectedPlan.price} DZD</h2>
            </div>
          </div>
          <div className="modal-body">
            <div className="top-form">
              <div className="form">
                <div className="top-footer">
                  <input type="text" name="company_name" placeholder="Nom de l’entreprise" required />
                  <input type="text" name="ceo_name" placeholder="Nom du CEO " required />
                </div>
                <input type="email" name="email" placeholder="Email" required />
                <input type="tel" name="phone" placeholder="Numéro de téléphone" required />
                <input type="text" name="rc_number" placeholder="Numéro RC" required />
                <input type="text" name="location" placeholder="Localisation" required />
            
              </div>
            </div>
          </div>
          <div className="methode-payment">
            <h3>Méthode de paiement :</h3>
            <div className="cards-payment">
         <div className="card-contente">
         <div className="card-payment">
                <img src={dhbya} alt="" />
              </div>
              <h3>CIB ou
              Dahabiya</h3>
         </div>
         <div className="card-contente">
              <div className={payement ? 'card-payment' : 'card-payment active-payment'} onClick={() => setPayement(false)}>
                <img src={repete} alt="" />
              </div>
              <h3>Virement
              bancaire</h3>
              </div>
              <div className="card-contente">
              <div className={!payement ? 'card-payment' : 'card-payment active-payment'} onClick={() => setPayement(true)}>
                <img src={truck} alt="" />
              </div>
              <h3>Cash on 
              delivery</h3>
              </div>
            </div>
          </div>
          <div className="btnGroup">
                  <button type="submit">
                    Continuer
                    <FaArrowRight />
                  </button>
                  <button type="button" onClick={closeModal}>
                    Annuler la demande
                  </button>
                </div>
         </form>
        </Modal>
        <div className="back">
          <Link to="/subscription"><IoMdArrowRoundBack size={25} /></Link>
        </div>
        <div className="subscription-detail-content">
          <div className="top-subscription-detail-content">
            <h1>Vous avez sélectionné le plan {selectedPlan.title}</h1>
          </div>
          <div className="show-more">
            <div className="question-content">
              {qst.map((item, index) => (
                <div className="question" key={index}>
                  <span onClick={() => handleClicked(index)}>
                    <p>{item.qst}</p>
                    {clickedQuestions.includes(index) ? <FaPlus /> : <FaMinus />}
                  </span>
                  <div className={clickedQuestions.includes(index) ? "active-rep rep" : "rep"}>
                    <p>{item.reponse}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        <div className="left">
          <img src={logoLigne} alt="" />
          <div className="card">
            <div className="card-title">
              <h3>
                <img src={selectedPlan.image} alt="alien" />
                {selectedPlan.title}
              </h3>
            </div>
            <h2>Ce que vous obtiendrez</h2>
            <ul>
              {selectedPlan.benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCircleCheck className="checked" /> {benefit}
                </li>
              ))}
            </ul>
            <h1>
              {selectedPlan.price} <span>mois</span>
            </h1>
            <Link>
              <button onClick={openModal}>Choisir</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
