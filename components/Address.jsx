import FeedbackForm from "./FeedbackForm";
import Map from "./Map";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "img/svg/noun-call.min.svg",
      name: "Tél",
      info: (
        <>
          <li>
            <a href="tel: 01.55.43.00.43">01.55.43.00.43</a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "img/svg/noun-email.min.svg",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:medialogis@medialogis.com">
              medialogis@medialogis.com
            </a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "img/svg/noun-location.min.svg",
      name: "Adresse",
      info: (
        <>
          <li>
            <p>
              29 Rue Buffon 75005,
              <br />
              Paris, France
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <div className="ml_contact" id="contact">
      <div className="container">
        <div className="ml_title">
          <h3>Contacter</h3>
          <p>N'hésitez pas à nous contacter si vous avez des questions.</p>
        </div>
        <div className="extra_info">
          <ul className="wrapper">
            {addressContent.map((item) => (
              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={item.animDelay}
                key={item.id}
              >
                <div className="list_inner">
                  <div className="icon">
                    <img src={item.iconImg} alt="icon" />
                  </div>
                  {/* End icon */}
                  <div className="content">
                    <h3>{item.name}</h3>
                    <ul>{item.info}</ul>
                  </div>
                  {/* End .content */}
                </div>
              </li>
            ))}
          </ul>
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
  );
};

export default Address;
