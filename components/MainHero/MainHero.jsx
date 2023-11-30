"use client";
import Container from "../Container/Container";
import Section from "../Section/Section";
import css from "./MainHero.module.scss";

import React, { useEffect, useRef } from "react";

const MainHero = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.muted = false;
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.videoOverlay}></div>
      <video
        autoPlay={true}
        loop={true}
        mute={true}
        ref={vidRef}
        className={css.video}
      >
        {/* <source
          type="video/mp4"
          src="https://londonweb.studio/wp-content/uploads/2022/03/video-2.mp4"
        /> */}
        <source
          type="video/mp4"
          src={
            // "https://drive.google.com/uc?export=download&id=1f0ZgU02cFlNZVUk0eIRib_uXC-rX_WO1"
            "https://drive.google.com/uc?export=download&id=1QQWrUmaAykEagc2o77rM22_7qW-FQnxw"
          }
        />
        Your browser does not support the video tag.
      </video>
      <div className={css.triangle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
        </svg>
      </div>
      <h1 className={css.title}>WELCOME TO G2S WEB LAB</h1>
      <p className={css.subtitle}>Creating Digital Excellence</p>
      <button type="button" className={css.button}>
        Get started
      </button>
    </div>
  );
};

export default MainHero;
