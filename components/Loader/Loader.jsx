"use client";
import Image from "next/image";
import { useEffect } from "react";

import Container from "../Container/Container";

import css from "./Loader.module.scss";

const Loader = () => {
  useEffect(() => {
    const startLoader = () => {
      const interval = setInterval(() => {
        const loaderContainer = document.querySelector(
          `.${css.loader_container}`
        );
        if (loaderContainer) {
          loaderContainer.parentNode.removeChild(loaderContainer);
          document.body.appendChild(loaderContainer);
        }
      }, 1500);

      return () => clearInterval(interval);
    };

    startLoader();
  }, []);
  return (
    <Container className={css.main_container}>
      <div className={css.loader_container}>
        {" "}
        <h1 className={css.loading_title}>Loading...</h1>
        <Image
          className={css.letter_one}
          src="/img/logo/logoOne.svg"
          alt="logo first letter"
          width={155}
          height={160}
        />
        <Image
          className={css.letter_two}
          src="/img/logo/logoTwo.svg"
          alt="logo second letter"
          width={155}
          height={160}
        />
        <Image
          className={css.letter_three}
          src="/img/logo/logoThree.svg"
          alt="logo third letter"
          width={155}
          height={160}
        />
      </div>
    </Container>
  );
};

export default Loader;
