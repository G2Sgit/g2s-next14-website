import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

import css from "./WeDoingSection.module.scss";

const WeDoingSection = () => {
    return (
        <div className={css.background}>
            <div className={css.wrapper}>
                <div className={css["section-img-wrapper"]}>
                    <Image
                        src="/img/homePage/about-5.jpg"
                        width={750}
                        height={879}
                        alt="Team photo"
                        className={css["section-img"]}
                    />
                </div>
                <div className={css["section-text-content"]}>
                    <span className={css["section-subtext"]}>Your Digital solution on your terms</span>
                    <h2 className={css["section-title"]}>
                        Pay Per Month
                        <span className={css["color-orange"]}> Website Designing</span>
                    </h2>
                    <div className={css.description}>
                        <p>
                            In a fast-paced digital landscape,
                            where online presence is paramount,
                            we understand that budget constraints
                            and financial flexibility are essential considerations.
                            That&apos;s why we&apos;re thrilled to present
                            our Pay-Per-Month Website Designing Service—a
                            revolutionary approach to website development
                            that empowers you to unlock your digital potential
                            without the upfront costs.
                        </p>
                        <div className={css["paragrahp-wrapper"]}>
                            <div className={css["icon-wrapper"]}>
                                <Image
                                    src="/img/homePage/quote-1.png"
                                    width={40}
                                    height={40}
                                    alt="icon"
                                    className={css["icon-img"]}
                                />
                            </div>
                            <p>
                                At London Web Studio,
                                we believe that exceptional web design shouldn&apos;t
                                be out of reach for anyone. With our Pay-Per-Month Service,
                                you gain access to our full spectrum of web design
                                and development expertise while keeping
                                your financial goals firmly in focus.
                            </p>
                        </div>
                    </div>
                    <button type="button" className={css["button"]}>
                        View Our Packages
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WeDoingSection;