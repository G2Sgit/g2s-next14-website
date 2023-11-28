import { CiCalendarDate } from "react-icons/ci";
import css from "../FooterContent.module.scss";

const ContentBlog = () => {
  return (
    <div className={css.blockWrapper}>
      <h3>Blog</h3>
      <p>
        <a href="/">
          What are the benefits of pay per month website service at G2S Web Lab?
        </a>
      </p>
      <p className={css.date}>
        <CiCalendarDate />
        November 28, 2023
      </p>
    </div>
  );
};

export default ContentBlog;
