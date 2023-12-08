import Link from "next/link";

import css from "./SingleProject.module.scss";

const SingleProject = ({ projectToRender }) => {
  const { projectName, projectUrl, projectImgSrc, projectImgAlt } =
    projectToRender;

  return (
    <li className={css.project_card_thumb}>
      <div className={css.project_card_overlay}>
        <Link className={css.project_description_link} href={"#"}>
          {projectName}
        </Link>
        <div className={css.project_description_button}>&#10133;</div>
      </div>

      {/* <p>{projectUrl}</p> */}
      <div className={css.image_thumb}>
        <img src={projectImgSrc} alt={projectImgAlt} />
      </div>
    </li>
  );
};

export default SingleProject;
