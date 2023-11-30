import Image from "next/image";

import Paragraph from "@/components/Paragraph/Paragraph";

import css from './AboutUsSection.module.scss';

const AboutUsSection = () => {
    return (
        <div className={css.wrapper}>
            <div className={css["section-img"]}>
                <Image
                src="/img/homePage/bl4.jpg"
                width={516}
                height={393}
                alt="Team photo"
            />
            </div>
            <div className={css["section-text-content"]}>
                <span className={css["section-subtext"]}>About us</span>
                {/* SectionTitle */}
                <h2 className={css["section-title"]}>
                    Web Design Beyond
                    <span className={css["color-orange"]}> Pixels</span>
                </h2>
                <div className={css.description}>
                    <p>
                        Welcome to London Web Studio,
                        your gateway to exceptional web design
                        and development services in the heart
                        of the vibrant city of London.
                        At London Web Studio,
                        we believe that your online presence
                        should not only be visually captivating
                        but also highly functional,
                        ensuring a seamless user experience
                        for your audience.
                    </p>
                    <p>
                        In the bustling heart of London,
                        where innovation meets artistry,
                        you&apos;ll find London Web Studio—a dynamic hub
                        for visionary website design and cutting-edge development.
                        At London Web Studio, we don&apos;t just build websites;
                        we craft digital experiences that leave a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;