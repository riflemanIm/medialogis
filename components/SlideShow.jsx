import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";

Modal.setAppElement("#__next");

const SlideShow = ({ slideshowData }) => {
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

  const handleClinicsData = (inx) => {
    const find = slideshowData[inx];
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleClinicsData(id);
  };

  return (
    <div className="slideshow_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          {slideshowData.map((item, inx) => (
            <li key={item.inx}>
              <div className="list_inner">
                <div className="image">
                  <div onClick={() => handleModle(inx)} className="details">
                    <img
                      src={item.img}
                      data-tip
                      data-for={"data-for" + inx}
                      alt={item.title}
                    />

                    <ReactTooltip
                      id={"data-for" + inx}
                      place="bottom"
                      type="light"
                      effect="float"
                      className="tooltip-wrapper"
                    >
                      <div>
                        <h5>{item.title}</h5>
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
            <div className="description_wrap center">
              <img src={singleData.img} alt={singleData.title} />
              <h5>{singleData.title}</h5>
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

export default SlideShow;
