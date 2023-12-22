"use client";

import Image from "next/image";

import css from "./AboutUsWithNumbers.module.scss";
import CountUp from "react-countup";

const AboutUsWithNumbers = () => {
  return (
    <div className={css.wrapper}>
      <div className={css["section-img"]}>
        <Image
          src="/img/aboutUsPage/aboutUs-multicolor.png"
          width={516}
          height={393}
          alt="Team photo"
        />
      </div>
      <div className={css["section-text-content"]}>
        {/* SectionTitle */}
        <h2 className={css["section-title"]}>
          London
          <span className={css["color-orange"]}> Web</span> Studio
        </h2>
        <ul className={css.description}>
          <li>
            Welcome to London Web Studio, your partner in crafting digital
            experiences that captivate, engage, and inspire. Nestled in the
            heart of London, we are more than just a web design company&#9866;we
            are the architects of your online success story.
          </li>
          <li>
            At London Web Studio, our mission is to transform your digital
            vision into reality. We are dedicated to delivering bespoke web
            solutions that not only reflect your brand&apos;s uniqueness but
            also help you thrive in the ever-evolving digital landscape.
          </li>
          <ul className={css.counters}>
            <li className={css.counter}>
              <p className={css.counterContent}>
                <CountUp end={653} duration={0.3} suffix=" +" />
              </p>
              <p className={css.counterTitle}>Projects Completed</p>
            </li>
            <li className={css.counter}>
              <p className={css.counterContent}>
                <CountUp end={650} duration={0.3} suffix=" +" />
              </p>
              <p className={css.counterTitle}>Happy Customers</p>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsWithNumbers;
