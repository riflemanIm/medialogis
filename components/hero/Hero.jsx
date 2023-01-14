import React from "react";
//import Social from "../Social";
//import ReactTyped from "react-typed";
import Image from "next/image";
import heroImage1 from "../../public/img/hero/home1.jpg";
import heroImage2 from "../../public/img/hero/home2.jpg";

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div>
          <div
            className="img-shape"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image src={heroImage1} alt="brand" />
          </div>
          <div className="extra">
            <h5
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              className="hello"
            >
              Médecin Libéral
            </h5>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Née de plus de 10 années de coopération étroite avec des
              praticiens, MEDIALOGIS est une solution complète destinée aux
              médecins libéraux.
            </p>
          </div>
        </div>
        <div>
          <div
            className="img-shape"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Image src={heroImage2} alt="brand" />
          </div>
          <div className="extra">
            <h5
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              className="hello"
            >
              ETABLISSEMENTS DE SANTE
            </h5>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Un traitement médical de qualité et une gestion efficace d’un
              établissement de santé imposent un nombre croissant d’exigences
              aux systèmes d’information médicale.
            </p>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
