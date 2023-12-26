import Paragraph from "@/components/Paragraph/Paragraph";
import css from "./MaintenanceSectionHeading.module.scss";

export default function MaintenanceSectionHeading({
  subtitle,
  titlePart,
  titleAccent,
  titleRestPart,
  text,
}) {
  return (
    <div className={css.section_wrapper}>
      <div>
        <h2 className={css.subtitle}>{subtitle}</h2>
        <h3 className={css.title}>
          {titlePart}
          <span className={css.accent}>{titleAccent}</span>
          {titleRestPart}
        </h3>
      </div>
      <Paragraph content="Welcome to London Web Studio Website Maintenance Services, where your success is our mission, and your website is our priority. Join the ranks of businesses that trust us to ensure their websites are always running at their best." />
    </div>
  );
}
