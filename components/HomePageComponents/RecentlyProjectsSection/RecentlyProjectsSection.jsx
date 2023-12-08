import React from "react";
import { projects } from "../../../data/allProjects";
import SingleProject from "./SingleProject/SingleProject";
// import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./RecentlyProjectsSection.module.scss";

const RecentlyProjects = () => {
  // console.log(projects);
  // const { id, projectName, projectUrl, projectImgSrc } = projects;

  const projectsToShow = projects.reverse().slice(0, 6);

  return (
    <>
      <p className={css.text_before_title}>OUR WORK SHOWCASE</p>
      <h2 className={css.section_title}>
        View our recently completed <span>Projects</span>
      </h2>
      <ul className={css.cards_container}>
        {projectsToShow.map((project) => (
          <SingleProject key={project.id} projectToRender={project} />
        ))}
      </ul>
    </>
  );
};

export default RecentlyProjects;
