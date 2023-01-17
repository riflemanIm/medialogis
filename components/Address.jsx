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
  );
};

export default Address;
