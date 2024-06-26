import React, { useState } from "react";

import Tilt from "react-parallax-tilt";
import servicesData from "../../data/services";
import SlideShow from "../SlideShow";
import Modal from "react-modal";
import ModalTarifs from "../modal/ModalTarifs";

Modal.setAppElement("#__next");

const Service = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBServicesData = (id) => {
    const find = servicesData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleBServicesData(id);
  };

  return (
    <div className="ml_services" id="service">
      <div className="container">
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="ml_title">
              <h3>Médecin Libéral</h3>
              <p>
                MEDIALOGIS est composé de plusieurs modules nécessaires à
                l’automatisation de toutes les activités d'un médecin libéral, y
                compris un système d’archivage des images obtenues par
                l’équipement de diagnostic.
              </p>
            </div>
          </div>
          <div className="rightpart">
            <ModalTarifs />
          </div>
        </div>

        {/* End  About Details Modal */}
        <div className="service_list">
          <ul>
            {servicesData.map((item) => (
              <li data-aos="fade-right" data-aos-duration="1200" key={item.id}>
                <Tilt>
                  <div
                    className="list_inner"
                    onClick={() => handleModle(item?.id)}
                  >
                    <div className="hover">
                      <img
                        className="svg custom"
                        src={item.imgIcon}
                        alt="icon"
                      />
                      <div className="service_title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="learn_more">
                        {item.subtitle}
                        <span></span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </li>
            ))}
          </ul>

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
                <div className="description_wrap ">
                  {/* 
                 Big image */}
                  {singleData?.popupImg != null && (
                    <div className="popup_informations">
                      <div className="image">
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${singleData?.popupImg})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="description">
                    <h2>{singleData?.popupTitle}</h2>
                    {singleData?.slideShow != null && (
                      <SlideShow slideshowData={singleData?.slideShow} />
                    )}
                    {singleData?.firstDescriptionText}

                    {singleData?.serviceListDescriptions}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
          </Modal>
          {/* End Modal  */}
        </div>
      </div>
    </div>
  );
};

export default Service;
