import FeatureItem from "../FeatureItem/FeatureItem";
import css from "./MaintenanceAdditionals.module.scss";
import Image from "next/image";

export default function MaintenanceAdditionals() {
  return (
    <div className={css.wrapper}>
      <FeatureItem
        item={{
          title: "Responsive Support",
          text: "Our dedicated support team is available around the clock to address your inquiries, provide assistance, and resolve any issues promptly. Your peace of mind is our priority.",
        }}
      />
      <div className={css.img_thumb}></div>
    </div>
  );
}
