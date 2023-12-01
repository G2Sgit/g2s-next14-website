import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg fill={"white"} width={"130px"} height={"90px"}>
        <use href={"/logo-sprite.svg#icon-logo1"} />
      </svg>
      <p>
        Web <br /> lab
      </p>
      {/* <svg fill={"white"} width={"30px"} height={"30px"}>
        <use href={"/logo-sprite.svg#icon-pencil"} />
      </svg> */}
    </div>
  );
};

export default Logo;
