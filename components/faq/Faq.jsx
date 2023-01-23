import React from "react";
import Accordion from "../Accordion";
import faqContent from "../../data/faq";

export default function Faq() {
  return (
    <div className="ml_faq" id="faq">
      <div className="container">
        <div className="ml_title">
          <h3>FAQ</h3>
          <p>Vous trouverez ici les réponses à la plupart des questions</p>
        </div>

        {faqContent.map((head) => (
          <React.Fragment key={head.id}>
            <div className="title">
              <h4>{head.title}</h4>
            </div>

            {head.groups.map((group, inx) => (
              <div className="group" key={inx}>
                <h5>
                  {group.gr_name} <span>[{group.gr_questions.length}]</span>
                </h5>

                {group.gr_questions.map((row, inx) => (
                  <Accordion
                    key={inx}
                    title={row?.question}
                    children={row?.answer}
                  />
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
