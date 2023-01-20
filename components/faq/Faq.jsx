import React from "react";

import faqContent from "../../data/faq";

export default function Faq() {
  return (
    <div className="ml_faq">
      <div className="container">
        <div className="ml_title">
          <h3>Faq</h3>
          <p>Vous trouverez ici les réponses à la plupart des questions</p>
        </div>

        {faqContent.map((head) => (
          <>
            <div key={head.id} className="head">
              <h4>{head.title}</h4>
            </div>

            {head.items.map((row) => (
              <div class="table">
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