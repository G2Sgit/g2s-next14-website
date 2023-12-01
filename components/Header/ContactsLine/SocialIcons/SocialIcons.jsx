import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import css from "./SocialIcons.module.scss";

export default function SocialIcons() {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
      </li>
      <li className={css.link}>
        <a href="http://www.instagram.com/">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}
