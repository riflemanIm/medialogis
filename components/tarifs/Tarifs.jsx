import React from "react";

import tarifsContent from "../../data/tarifs";

export default function Tarifs() {
  return (
    <div className="ml_tarifs">
      <div className="container">
        <div className="ml_title">
          <h3>Tarifs</h3>
          <p>
            <h6>Cette grille tarifaire est réservée aux cabinets libéraux.</h6>
            Elle ne possède qu'une valeur indicative pour les établissement de
            santé, lesquels nécessitent généralement une analyse préalable et la
            rédaction d'un cahier des charges pour son automatisation.
          </p>
          <p>
            Nous vous invitons à contacter notre équipe qui vous aidera à
            définir les modalités de votre commande.
          </p>
        </div>

        {tarifsContent.map((head) => (
          <>
            <div key={head.id} className="head">
              <h4>{head.title}</h4>
            </div>

            {head.items.map((row) => (
              <div className="table">
                <div key={row.id} className="item">
                  {row?.name && <h6>{row?.name}</h6>}
                  <p>{row?.descr}</p>
                </div>
                <div className="price">
                  {row?.price} {row?.price && "€"}
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
