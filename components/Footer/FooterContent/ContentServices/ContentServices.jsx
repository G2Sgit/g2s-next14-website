import css from "../FooterContent.module.scss";
const ContentServices = () => {
  return (
    <div className={css.blockWrapper}>
      <h3>Our Services</h3>
      <ul>
        <li className={css.link}>
          <a href="/">Web Designing</a>
        </li>
        <li className={css.link}>
          <a href="/">E-Commerce Solutions</a>
        </li>
        <li className={css.link}>
          <a href="/">Website Maintenance</a>
        </li>
        <li className={css.link}>
          <a href="/">Pay Per Month Websites</a>
        </li>
      </ul>
    </div>
  );
};

export default ContentServices;
