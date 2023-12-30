import css from "./Heading.module.scss";
export default function Heading({ partOne, accent, partTwo }) {
  return (
    <h1 className={css.servicesHeading}>
      {partOne}
      <span className={css.accent}>{accent}</span>
      {partTwo || ""}
    </h1>
  );
}
