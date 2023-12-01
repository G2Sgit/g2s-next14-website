import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import css from "./SocialLinks.module.scss";

export default function SocialLinks() {
  return (
    <ul className={css.wrapper}>
      <li className={css.link}>
        <a href="https://www.linkedin.com">
          <FaLinkedinIn />
        </a>
      </li>
      <li className={css.link}>
        <a href="https://www.facebook.com/learnbuildteach/">
          <FaFacebookF />
        </a>
      </li>
      <li className={css.link}>
        <a href="http://www.instagram.com/larnbuildteach">
          <FaInstagram />
        </a>
      </li>
      <li className={css.link}>
        <a href="https://www.youtube.com">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
}
