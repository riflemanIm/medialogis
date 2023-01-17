import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Clinics from "../../clinics/Clinics";
import Testimonial from "../../testimonial/Testimonial";
import dynamic from "next/dynamic";
import FeedbackForm from "@components/FeedbackForm";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const MedialogisHorizontal = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${
          isDark ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      {/* <Hero />
      End Hero */}

      <About />
      {/* End Hero */}

      <div className="ml_services" id="service">
        <div className="container">
          <div className="ml_title">
            <h3>Médecin Libéral</h3>
            <p>
              MEDIALOGIS est composé de plusieurs modules nécessaires à
              l’automatisation de toutes les activités d'un médecin libéral, y
              compris un système d’archivage des images obtenues par
              l’équipement de diagnostic.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="ml_clinics" id="clinics">
        <div className="container">
          <div className="ml_title">
            <h3>Les établissements de santé</h3>
            <p>
              Un traitement médical de qualité et une gestion efficace d’un
              établissement de santé imposent un nombre croissant d’exigences
              aux systèmes d’information médicale. Le système d’information
              médicale MEDIALOGIS gère toutes les étapes de l’assistance
              médicale. Il réduit d’une manière significative les dépenses
              horaires du personnel soignant en facilitant la documentation. Il
              assure un niveau innovant d’optimisation des ressources de
              l’établissement de santé. Résultat : un traitement médical d’une
              qualité élevée.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Clinics />
        </div>
      </div>
      {/* End Clinics */}

      <div className="ml_testimonials" id="testimonial">
        <div className="container">
          <div className="ml_title">
            <h3>Témoignages d'utilisateurs</h3>
            <p>Ce que les gens disent et écrivent sur nous</p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="ml_contact" id="contact">
        <div className="container">
          <div className="ml_title">
            <h3>Contacter</h3>
            <p>N'hésitez pas à nous contacter si vous avez des questions.</p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  Remplissez ce formulaire pour
                  <br />
                  <span> nouveaux projets ou partenariats.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <FeedbackForm />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default MedialogisHorizontal;
