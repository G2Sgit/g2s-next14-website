import css from "./PageHero.module.scss";
import Container from "../Container/Container";

const PageHero = ({ title, description, watermark, primary }) => {
  return (
    <section className={primary ? css["primary-hero"] : css["secondary-hero"]}>
      <Container>
        <h1 className={css.title}>
          {watermark && <span className={css.watermark}>{watermark}</span>}
          {title}
        </h1>
        {description && <p className={css.text}>{description}</p>}
      </Container>
    </section>
  );
};

export default PageHero;
