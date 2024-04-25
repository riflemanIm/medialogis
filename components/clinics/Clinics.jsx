import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
//import Social from "../Social";
import clinicsData from "../../data/clinics";
import ModalTarifs from "../modal/ModalTarifs";

const Clinics = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClinicsData = (id) => {
    const find = clinicsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleClinicsData(id);
  };

  return (
    <div className="ml_clinics" id="clinics">
      <div className="container">
        <div
          className="content"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="leftpart">
            <div className="ml_title">
              <h3>Les établissements de santé</h3>
              <p>
                Un traitement médical de qualité et une gestion efficace d’un
                établissement de santé imposent un nombre croissant d’exigences
                aux systèmes d’information médicale. Le système d’information
                médicale MEDIALOGIS gère toutes les étapes de l’assistance
                médicale. Il réduit d’une manière significative les dépenses
                horaires du personnel soignant en facilitant la documentation.
                Il assure un niveau innovant d’optimisation des ressources de
                l’établissement de santé. Résultat : un traitement médical d’une
                qualité élevée.
              </p>
              <div style={{ margin: "32px 0" }}>
                <ModalTarifs />
              </div>
            </div>
          </div>

          <div className="rightpart">
            <img src="img/scheme8.jpg" className="partners" />
          </div>
        </div>

        <div className="clinics_inner my_carousel gallery_zoom">
          <ul data-aos="fade-right" data-aos-duration="1200">
            <Slider {...settings}>
              {clinicsData.map((item) => (
                <li key={item.id}>
                  <div className="list_inner">
                    <div className="image">
                      <div
                        onClick={() => handleModle(item?.id)}
                        className="details"
                      >
                        <h5 style={{ marginBottom: 18 }}>{item?.title}</h5>

                        <p>
                          <a
                            href={item?.clinicsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item?.clinicsLink.replace(/^https:\/\//i, "")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
          {/* End ul */}

          {/* Start Modal  */}
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="ml_modalbox">
              <button className="close-modal" onClick={() => setIsOpen(false)}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  {/* <div className="popup_informations">
                    <div className="image">
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${singleData?.clinicsImage})`,
                        }}
                      ></div>
                    </div>
                  </div> */}
                  {/* End image */}

                  <div className="clinics_content-inner">
                    <div className="full-content">
                      <h2 className="title">{singleData?.title}</h2>
                      {singleData?.description}
                      {singleData?.clinicsLink && (
                        <p style={{ textAlign: "right" }}>
                          <a
                            href={singleData?.clinicsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {singleData?.clinicsLink.replace(
                              /^https:\/\//i,
                              ""
                            )}
                          </a>
                        </p>
                      )}

                      {/* <div className="right-content">
                      <ul className="list">
                        <li>
                          <h5>Partner</h5>
                          <span>{singleData?.partnerName}</span>
                        </li>

                        <li>
                          <h5>Category</h5>
                          <span>{singleData?.category}</span>
                        </li>

                        <li>
                          <h5>Data</h5>
                          <span>{singleData?.date}</span>
                        </li>

                        <li>
                          <h5>Link</h5>
                          <span>
                            <a
                              href={singleData?.clinicsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {singleData?.clinicsLink}
                            </a>
                          </span>
                        </li>

                        <li className="news_share d-blok">
                          <h5>Share</h5>
                          <Social />
                        </li>
                      </ul>
                    </div> */}
                    </div>
                    {/* End .portfoiol_content-inner */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End modal  */}
        </div>

        <div className="clinics_content-inner">
          <div className="left-content">
            <div className="ml_title">
              <h3 style={{ marginTop: 32 }}>Déclarer votre fichier patients</h3>
              <h5>La CNIL</h5>
              <p>
                La Commission Nationale de l’Informatique et des Libertés a pour
                mission essentielle de protéger la vie privée et les libertés
                individuelles ou publiques. Elle est chargée de veiller au
                respect de la loi "Informatique et libertés". Cette loi vous
                oblige à déclarer l’existence de votre fichier informatique de
                dossiers patients.
                <br />
                <a href=" www.cnil.fr"> www.cnil.fr</a>
              </p>

              <h5>Vous trouverez également :</h5>
              <div class="in_list">
                <ul>
                  <li>
                    <a
                      target="_annexe"
                      href="https://www.declaration.cnil.fr/declarations/declaration/declarant.display.action"
                      class="lien"
                    >
                      procédure et une aide
                    </a>{" "}
                    à la déclaration,
                  </li>
                  <li>
                    le détail de vos{" "}
                    <a
                      target="_annexe"
                      href="http://www.cnil.fr/vos-droits/vos-droits/"
                      class="lien"
                    >
                      droits
                    </a>{" "}
                    et{" "}
                    <a
                      target="_annexe"
                      href="http://www.cnil.fr/vos-obligations/vos-obligations/"
                      class="lien"
                    >
                      obligations
                    </a>
                    ,
                  </li>
                  <li>
                    des modèles de{" "}
                    <a
                      target="_annexe"
                      href="http://www.cnil.fr/vos-obligations/informations-legales/"
                      class="lien"
                    >
                      mentions légales
                    </a>
                    ,
                  </li>
                  <li>
                    le «{" "}
                    <a
                      target="_annexe"
                      href="https://www.declaration.cnil.fr/declarations/declaration/help.display_manual.action"
                      class="lien"
                    >
                      mode d'emploi
                    </a>{" "}
                    ».
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-content">
            <ModalTarifs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
