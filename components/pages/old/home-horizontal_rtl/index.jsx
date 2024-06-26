import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../../header/HeaderHorizontal";
import Hero from "../../../hero/Hero";
import About from "../../../about/About";
import Service from "../../../service/Service";
import Clinics from "../../../clinics/Clinics";
import Testimonial from "../../../testimonial/Testimonial";
import Blog from "../../../blog/Blog";
import Contact from "../../../Contact";
import Address from "../../../Address";
import Map from "../../../Map";
import HeaderMobile from "../../../header/HeaderMobile";

const MedialogisHorizontalRtl = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.add("rtl");
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

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="ml_services" id="service">
        <div className="container">
          <div className="ml_title">
            <h3>What I Do</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
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
            <h3>Clinics</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Clinics />
        </div>
      </div>
      {/* End Clinics */}

      <div className="ml_tarifs" id="tarifs">
        <div className="container">
          <div className="ml_title">
            <h3>Tarifs</h3>
            <p>
              <h6>
                Cette grille tarifaire est réservée aux cabinets libéraux.
              </h6>
              Elle ne possède qu'une valeur indicative pour les établissement de
              santé, lesquels nécessitent généralement une analyse préalable et
              la rédaction d'un cahier des charges pour son automatisation.
            </p>
            <p>
              Nous vous invitons à contacter notre équipe qui vous aidera à
              définir les modalités de votre commande.
            </p>
          </div>

          <Tarifs />
        </div>
      </div>
      {/* End tarifs */}

      <div className="ml_testimonials" id="testimonial">
        <div className="container">
          <div className="ml_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
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

      <div className="ml_news" id="blog">
        <div className="container">
          <div className="ml_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="ml_contact" id="contact">
        <div className="container">
          <div className="ml_title">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
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
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
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

export default MedialogisHorizontalRtl;
