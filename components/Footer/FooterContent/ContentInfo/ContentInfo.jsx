import { RiMapPinLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import css from "../FooterContent.module.scss";

const ContentInfo = () => {
  return (
    <div className={css.blockWrapper}>
      <h3>Contact Info</h3>
      <ul>
        <li className={css.link}>
          <a href="/">
            <RiMapPinLine />
            <span>
              124 City Road, London, <br /> EC1V 2NX
            </span>
          </a>
        </li>
        <li className={css.link}>
          <a href="tel:+380670000000">
            <FiPhoneCall />
            <span>+38 067 000 00 00</span>
          </a>
        </li>
        <li className={css.link}>
          <a href="/">
            <MdOutlineMailOutline />
            <span> hi@g2s.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContentInfo;
