"use client";
import React, { useState } from "react";
import Container from "@/components/Container/Container";
import { projects } from "../../../data/allProjects";
import SingleProject from "./SingleProject/SingleProject";
import ModalSingleProject from "./ModalSingleProject/ModalSingleProject";
// import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./RecentProjectsSection.module.scss";

const RecentProjects = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [chosenSingleProject, setChosenSingleProject] = useState({});

  const projectsToShow = projects.slice(-6).reverse();

  const onOpenModal = ({ projectToRender }) => {
    setIsModalShown(true);
    setChosenSingleProject(projectToRender);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const onCloseModal = () => {
    setIsModalShown(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <section className={css.recent_project_section}>
      <Container>
        <p className={css.text_before_title}>OUR WORK SHOWCASE</p>
        <h2 className={css.section_title}>
          View our recently completed <span>Projects</span>
        </h2>
        <ul className={css.cards_container}>
          {projectsToShow.map((project) => (
            <SingleProject
              key={project.id}
              projectToRender={project}
              openModal={onOpenModal}
            />
          ))}
          {isModalShown && (
            <ModalSingleProject
              closeModal={onCloseModal}
              chosenSingleProject={chosenSingleProject}
            />
          )}
        </ul>
      </Container>
    </section>
  );
};

export default RecentProjects;
