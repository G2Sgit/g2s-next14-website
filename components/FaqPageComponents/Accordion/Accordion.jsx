"use client";
import AccordionItem from "./AccordionItem/AccordionItem";
import { useState } from "react";

import css from "./Accordion.module.scss";

const Accordion = ({ faqList }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className={css.accordion}>
      {faqList.map((faqItem) => {
        return (
          <AccordionItem
            key={faqItem.question}
            faqItem={faqItem}
            clickHandler={() => {
              faqItem.question === openId
                ? setOpenId(null)
                : setOpenId(faqItem.question);
            }}
            isOpen={faqItem.question === openId}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
