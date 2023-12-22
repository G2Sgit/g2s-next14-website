import Image from "next/image";
import Container from "../Container/Container";
import logoOne from "../../public/img/logo/logoOne.svg";
import logoTwo from "../../public/img/logo/logoTwo.svg";
import logoThree from "../../public/img/logo/logoThree.svg";

import css from "./Loader.module.scss";

const Loader = () => {
  return (
    <Container>
      <div className={css.loader_container}>
        <Image
          className={css.letter_one}
          src={logoOne}
          alt="logo first letter"
        />
        <Image
          className={css.letter_two}
          src={logoTwo}
          alt="logo second letter"
        />
        <Image
          className={css.letter_three}
          src={logoThree}
          alt="logo third letter"
        />

        {/* <div className={css.loader}></div>
      <svg
        fill={"red"}
        width={"130px"}
        height={"90px"}
        //  className={css.loader_logo}
      >
        <use href={icons + "#icon-logo1"} />
      </svg> */}
      </div>
    </Container>
  );
};

export default Loader;
