import { useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

import css from "./AccordionItem.module.scss";

const AccordionItem = ({ faqItem, isOpen, clickHandler }) => {
  const itemRef = useRef(null);

  const { question, answer } = faqItem;

  return (
    <li className={css.accordion_item}>
      <div
        className={css.accordion_question_wrapper}
        onClick={() => clickHandler()}>
        {isOpen ? <FaMinus /> : <FaPlus />}
        <div className={css.accordion_question}>{question}</div>
      </div>

      <div
        className={`${css.accordion_collapse}`}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0" }
        }>
        <div className={css.accordion_answer} ref={itemRef}>
          {answer}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
