import css from "./Footer.module.scss";
import FooterBottomLine from "./FooterBottomLine/FooterBottomLine";
import FooterContent from "./FooterContent/FooterContent";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <FooterContent />
      <FooterBottomLine />
    </footer>
  );
};

export default Footer;
