import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import css from "./SocialLinks.module.scss";

export default function SocialLinks() {
  return (
    <ul className={css.wrapper}>
      <li href="https://www.linkedin.com" className={css.link}>
        <FaLinkedinIn />
      </li>
      <li href="https://www.facebook.com/learnbuildteach/" className={css.link}>
        <FaFacebookF />
      </li>
      <li href="http://www.instagram.com/larnbuildteach" className={css.link}>
        <FaInstagram />
      </li>
      <li href="https://www.youtube.com" className={css.link}>
        <FaYoutube />
      </li>
    </ul>
  );
}
