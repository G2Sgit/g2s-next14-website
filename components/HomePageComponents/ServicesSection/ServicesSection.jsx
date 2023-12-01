import Image from "next/image";

import css from "./ServicesSection.module.scss";

const ServicesSection = () => {
  return (
    <ul className={css.wrapper}>
      <li className={css["card"]}>
        <div className={css["services-img"]}>
          <Image
            src="/img/homePage/services_bag.png"
            width={90}
            height={90}
            alt="Bag picture"
          />
        </div>
        <div className={css["card-text-content"]}>
          {/* CardTitle */}
          <h2 className={css["card-title"]}>Web Design & Development</h2>
          <div className={css.description}>
            <p>
              Our designers breathe life into your vision, creating visually
              stunning layouts that capture your brand's essence.
            </p>
          </div>
        </div>
        <button type="button" className={css["button"]}>
          View more
          {/* <svg class="icon" width="" height="">
            <use href=""></use>
          </svg> */}
        </button>
      </li>
      <li className={css["card"]}>
        <div className={css["services-img"]}>
          <Image
            src="/img/homePage/services_gold.png"
            width={90}
            height={90}
            alt="Gold picture"
          />
        </div>

        <div className={css["card-text-content"]}>
          {/* CardTitle */}
          <h2 className={css["card-title"]}>E-Commerce Solutions</h2>
          <div className={css.description}>
            <p>
              We specialize in creating online shopping experiences that drive
              sales and enhance customer satisfaction.
            </p>
          </div>
        </div>
        <button type="button" className={css["button"]}>
          View more
           {/* <svg class="icon" width="" height="">
            <use href=""></use>
          </svg> */}
        </button>
      </li>
      <li className={css["card"]}>
        <div className={css["services-img"]}>
          <Image
            src="/img/homePage/services_message.png"
            width={90}
            height={90}
            alt="Messages picture"
          />
        </div>
        <li className={css["card-text-content"]}>
          {/* CardTitle */}
          <h2 className={css["card-title"]}>Maintenance & Support</h2>
          <div className={css.description}>
            <p>
              Post-launch, we provide ongoing maintenance and support to keep
              websites updated, secure, and functioning smoothly.
            </p>
          </div>
        </li>
        <button type="button" className={css["button"]}>
          View more
           {/* <svg class="icon" width="" height="">
            <use href=""></use>
          </svg> */}
        </button>
      </li>
    </ul>
  );
};

export default ServicesSection;
