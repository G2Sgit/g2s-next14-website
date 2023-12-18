import Image from "next/image";

import Paragraph from "@/components/Paragraph/Paragraph";

import css from "./WhyChoseUs.module.scss";

const WhyChoseUs = () => {
  return (
    <div className={css.wrapper}>
      <div className={css["section-img"]}>
        <Image
          src="/img/aboutUsPage/aboutUs-man.jpg"
          width={516}
          height={393}
          alt="Team photo"
        />
      </div>
      <div className={css["section-text-content"]}>
        {/* SectionTitle */}
        <h2 className={css["section-title"]}>Why Choose Us?</h2>
        <ul className={css.description}>
          <li className={css.element}>
            <h3 className={css["section-subtitle"]}>Strategic Innovation:</h3>
            <p>
              We don&apos;t just create websites; we architect digital solutions
              that align with your goals. Our strategic approach ensures that
              your online presence drives results.
            </p>
          </li>
          <li className={css.element}>
            <h3 className={css["section-subtitle"]}>Design Excellence:</h3>
            <p>
              Our designers are artists in their own right, crafting visuals
              that not only grab attention but also tell your unique story.
            </p>
          </li>
          <li className={css.element}>
            <h3 className={css["section-subtitle"]}>End-to-End Services:</h3>
            <p>
              From concept to completion, we offer a full spectrum of services,
              including design, development, SEO, and ongoing maintenance.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoseUs;
