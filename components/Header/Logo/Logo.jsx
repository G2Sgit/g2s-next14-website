import css from "./Logo.module.scss";

const Logo = ({ isHomePage }) => {
  return (
    <div className={isHomePage ? css.logo : css.pageLogo}>
      {/* <svg fill={"white"} width={"120px"} height={"90px"}>
        <use href={"/logo-sprite.svg#icon-logo1"} />
      </svg> */}
      <svg fill={"white"} width={"80px"} height={"70px"}>
        <use href={"/logo-sprite.svg#icon-wawe"} />
      </svg>
      <p>
        Wave <br /> Web <br /> lab
      </p>
    </div>
  );
};

export default Logo;
