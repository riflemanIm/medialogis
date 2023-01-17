import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import Social from "../Social";
import clinicsData from "../../data/clinics";

Modal.setAppElement("#__next");

const Clinics = () => {
  var settings = {
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
          slidesToShow: 1,
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
                      alt="clinics"
                    />

                    <ReactTooltip
                      id={item.tooltipId}
                      place="bottom"
                      type="light"
                      effect="float"
                      className="tooltip-wrapper"
                    >
                      <div>
                        <h5>{item.title}</h5>
                        <span>{item.meta}</span>
                      </div>
                    </ReactTooltip>
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
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.clinicsImage})`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="portfoiol_content-inner">
                <div className="left-content">
                  <h2 className="title"> {singleData?.title}</h2>
                  {singleData?.projectDescriptions}
                </div>
                <div className="right-content">
                  <ul className="list">
                    <li>
                      <h5>Client</h5>
                      <span>{singleData?.clientName}</span>
                    </li>
                    {/* End list */}
                    <li>
                      <h5>Category</h5>
                      <span>{singleData?.category}</span>
                    </li>
                    {/* End list */}
                    <li>
                      <h5>Data</h5>
                      <span>{singleData?.date}</span>
                    </li>
                    {/* End list */}
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
                    {/* End list */}
                    <li className="news_share d-blok">
                      <h5>Share</h5>
                      <Social />
                    </li>
                    {/* End list */}
                  </ul>
                </div>
              </div>
              {/* End .portfoiol_content-inner */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End modal  */}
    </div>
  );
};

export default Clinics;
