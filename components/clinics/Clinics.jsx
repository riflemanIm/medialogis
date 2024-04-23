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
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
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
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
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
            </div>
          </div>
          <div className="rightpart">
            <ModalTarifs />
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
                        <img
                          src={item.clinicsImage}
                          data-tip
                          data-for={item.tooltipId}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <span>{item?.title}</span>
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
                  <div className="popup_informations">
                    <div className="image">
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${singleData?.clinicsImage})`,
                        }}
                      ></div>
                    </div>
                  </div>
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
      </div>
    </div>
  );
};

export default Clinics;
