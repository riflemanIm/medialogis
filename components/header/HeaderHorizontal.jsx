import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/logo_medialogis.png";
import logo2 from "../../public/img/logo/logo_medialogis_white.png";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "",
  email: "medialogis@medialogis.com",
  emailRef: "mailto:medialogis@medialogis.com",
};

const HeaderHorizontal = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  console.log("click", click, "navbar", navbar);
  return (
    <div className={`horizontal-menu ${navbar ? "fixed-header" : ""}`}>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div className={click ? "ml_sidebar  menu-open" : "ml_sidebar"}>
        <div className="sidebar_inner">
          <div className="logo">
            <Link href="/">
              <img className="logo_light" src={logo.src} alt="brand" />
              <img className="logo_dark" src={logo2.src} alt="brand" />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                //"home",
                "about",
                "service",
                "clinics",
                //"tarifs",
                "faq",
                "testimonial",
                "contact",
              ]}
              activeNavClass="active"
              offset={-80}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => {
                  return (
                    <li key={i}>
                      <div className="list_inner">
                        <a
                          href={val.itemRoute}
                          className={val.activeClass}
                          onClick={handleClick}
                        >
                          <img
                            className="svg custom"
                            src={`img/svg/${val.icon}.svg`}
                            alt="icon"
                          />
                          {val.itemName}
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              {/* <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/about/avatar.jpg)",
                  }}
                ></div>
              </div> */}
              <div className="short">
                {/* <h3>{sidebarFooterContent.name}</h3> */}
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </div>
  );
};

export default HeaderHorizontal;
