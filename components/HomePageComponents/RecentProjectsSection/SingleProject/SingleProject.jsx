import css from "./SingleProject.module.scss";

const SingleProject = ({ projectToRender, openModal }) => {
  const { id, projectName, projectUrl, projectImgSrc, projectImgAlt } =
    projectToRender;

  return (
    <li className={css.project_card_thumb}>
      <div className={css.project_card_overlay}>
        <h3
          onClick={() => openModal({ projectToRender })}
          className={css.project_description_link}>
          {projectName}
        </h3>
        <div
          onClick={() => openModal({ projectToRender })}
          className={css.project_description_button}>
          &#10133;
        </div>
      </div>

      <div className={css.image_thumb}>
        <img src={projectImgSrc} alt={projectImgAlt} />
      </div>
    </li>
  );
};

export default SingleProject;
