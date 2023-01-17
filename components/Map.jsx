import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Adresse%20:%2029%20Rue%20Buffon%2075005%20Paris,%20France+(MEDIALOGIS%20S.A)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
