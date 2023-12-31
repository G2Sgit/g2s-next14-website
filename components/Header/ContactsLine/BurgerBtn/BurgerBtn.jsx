import { IoMdClose } from "react-icons/io";
import { PiWavesLight } from "react-icons/pi";
import css from "./BurgerBtn.module.scss";

const BurgerBtn = ({ setIsOpen, isOpen }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoMdClose />
        ) : (
          <svg fill={"white"} width={"80px"} height={"70px"}>
            <use href={"/logo-sprite.svg#icon-wawe"} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BurgerBtn;
