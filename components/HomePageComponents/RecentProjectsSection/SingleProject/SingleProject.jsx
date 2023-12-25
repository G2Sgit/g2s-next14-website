import Image from "next/image";
import { BiPlusMedical } from "react-icons/bi";
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
          <BiPlusMedical />
        </div>
      </div>

      <div className={css.image_thumb}>
        <Image
          src={projectImgSrc}
          alt={projectImgAlt}
          width={300}
          height={213}
        />
      </div>
    </li>
  );
};

export default SingleProject;
