import css from "./Heading.module.scss";
export default function Heading() {
  return (
    <h1 className={css.servicesHeading}>
      Premium
      <span className={css.accent}> Web Design</span> Services
    </h1>
  );
}
