import React from "react";
import Slider from "react-slick";
import testimonialContent from "../../data/testimonial";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: true,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  return (
    <div className="ml_testimonials" id="testimonial">
      <div className="container">
        <div className="ml_title">
          <h3>Témoignages d'utilisateurs</h3>
          <p>Ce que les gens disent et écrivent sur nous</p>
        </div>
        {/* End edian_tm_title */}
        <div className="list ">
          <ul>
            <Slider {...settings}>
              {testimonialContent.map((val, i) => (
                <li
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.delayAnimation}
                >
                  <div className="list_inner">
                    <div className="details">
                      <div className="author">
                        <div className="image">
                          <div
                            className="main"
                            style={{
                              backgroundImage: `url(img/testimonials/testimonial-${val.img}.jpg)`,
                            }}
                          ></div>
                        </div>
                        {/* End image */}

                        <div className="short">
                          <h3>{val.name}</h3>
                          <span>{val.designation}</span>
                        </div>
                        {/* End short description */}
                      </div>
                      {/* End author */}

                      <div className="icon">
                        <img
                          className="svg"
                          src="img/svg/quote.svg"
                          alt="quote"
                        />
                      </div>
                      {/* End right quote icon */}
                    </div>

                    <div className="text">{val.desc}</div>
                    {/* End description */}
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}
