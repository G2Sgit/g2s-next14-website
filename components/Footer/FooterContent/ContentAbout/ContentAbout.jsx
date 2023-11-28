import SocialLinks from "../../SocialLinks/SocialLinks";
import css from "../FooterContent.module.scss";

const ContentAbout = () => {
  return (
    <div className={css.blockWrapper}>
      <h3>About Company</h3>
      <p className={css.description}>
        G2S Web Lab our gateway to exceptional web design and development
        services in the heart of Ukraine 💛💙
      </p>

      <SocialLinks />
    </div>
  );
};

export default ContentAbout;
