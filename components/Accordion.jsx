import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const MyAccordion = ({ title, children }) => {
  return (
    <Accordion
      transition={{
        duration: "300ms",
        timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      }}
    >
      <AccordionItem>
        {({ open }) => {
          console.log("open", open);
          return (
            <>
              <AccordionHeader className="title" as="a">
                <span>{title}</span>
                <img
                  className="svg custom"
                  src={`/img/svg/keyboard-arrow-${
                    !open ? "right" : "down"
                  }.svg`}
                  alt="icon"
                />
              </AccordionHeader>

              <AccordionBody>{children}</AccordionBody>
            </>
          );
        }}
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordion;
