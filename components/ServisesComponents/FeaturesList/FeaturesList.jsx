"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FeatureItem from "../FeatureItem/FeatureItem";
import css from "./FeaturesList.module.scss";
import Slider from "react-slick";
export default function FeaturesList({ features }) {
  const settings = {
    arrows: true,
    dots: true,
    infinity: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={css.featuresList}>
      <Slider {...settings}>
        {features.map((item) => (
          <FeatureItem item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
