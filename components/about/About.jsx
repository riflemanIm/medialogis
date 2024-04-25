import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalAbout from "../modal/ModalAbout";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="ml_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>MEDIALOGIS</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <p>
                Fruit de plus de 20 années de collaboration étroite avec des
                praticiens, MEDIALOGIS est une solution complète destinée aux
                médecins libéraux. S’adaptant aux besoins de chacun, MEDIALOGIS
                est également une gamme de produits qui se décline en fonction
                de votre spécialité médicale. Que vous soyez généraliste ou
                spécialiste, vous trouverez chez MEDIALOGIS des fonctionnalités
                indispensables pour tout médecin libéral, ainsi que des
                paramétrages et outils spécifiques pour votre spécialisation.
                MEDIALOGIS se présente donc comme un outil de travail riche,
                fiable, évolutif et flexible d’une importance majeure pour vous
                et pour vos patients.
              </p>
            </div>
            <div className="my_skills">
              <div className="ml_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/abou.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>+ De 25 Ans</h3>
                  <span> D'Expérience</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="ml_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalAbout />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
