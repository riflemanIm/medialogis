import React, { useState } from "react";
import Modal from "react-modal";
import Tarifs from "../tarifs/Tarifs";

const ModalTarifs = () => {
  const [isOpenTarifs, setIsOpenTarifs] = useState(false);
  function toggleModalTarifs() {
    setIsOpenTarifs(!isOpenTarifs);
  }

  return (
    <>
      <div className="ml_button">
        <button type="submit" className="color" onClick={toggleModalTarifs}>
          Tarifs
        </button>
      </div>
      <Modal
        isOpen={isOpenTarifs}
        onRequestClose={toggleModalTarifs}
        contentLabel="Tarifs"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="ml_modalbox">
          <button className="close-modal" onClick={toggleModalTarifs}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="description_wrap">
              <Tarifs />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTarifs;
