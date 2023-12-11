import { useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import css from "./ModalSingleProject.module.scss";

const ModalSingleProject = ({ chosenSingleProject, closeModal }) => {
  const {
    projectName,
    projectUrl,
    orderHistory,
    projectImgSrc,
    projectImgAlt,
    category,
    client,
    completionDate,
    location,
    shortDescription,
    advantagesList,
  } = chosenSingleProject;

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className={css.overlay}>
      <div onClick={handleBackdropClick} className={css.modal_thumb}>
        <div className={css.modal}>
          <div onClick={closeModal} className={css.close_button}>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </div>
          <h3 className={css.project_name_title}>{projectName}</h3>
          <h2 className={css.project_name_main_title}>
            Portfolios{projectName}
          </h2>
          <p className={css.order_history_text}>{orderHistory}</p>
          <ul>
            <li className={css.info_list_item}>
              <h4 className={css.info_title}>Category</h4>
              <p className={css.info_text}>{category}</p>
            </li>
            <li className={css.info_list_item}>
              <h4 className={css.info_title}>Client</h4>
              <p className={css.info_text}>{client}</p>
            </li>
            <li className={css.info_list_item}>
              <h4 className={css.info_title}>Completion Date</h4>
              <p className={css.info_text}>{completionDate}</p>
            </li>
            <li className={css.info_list_item}>
              <h4 className={css.info_title}>Location</h4>
              <p className={css.info_text}>{location}</p>
            </li>
          </ul>
          <p className={css.short_info}>{shortDescription}</p>
          <ul className={css.advantages_list}>
            {advantagesList.map((advantage) => (
              <li className={css.advantage_item}>{advantage}</li>
            ))}
          </ul>
          <h3 className={css.any_questions_title}>
            Have any Questions? Call us Today!
          </h3>
          <h2 className={css.phone_number}>+44 7449 187945</h2>

          <img
            className={css.project_img}
            src={projectImgSrc}
            alt={projectImgAlt}
          />

          <p className={css.call_to_action_text}>
            Ready to embark on your digital journey with London Web Studio?
          </p>
          <h2 className={css.call_to_action_title}>
            Let’s start crafting a web presence that truly sets you apart
          </h2>
          <a className={css.get_started_link} href="#">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalSingleProject;
