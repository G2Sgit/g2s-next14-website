import css from "./Header.module.scss";

import Navigation from "../Navigation/Navigation";
import ContactsLine from "./ContactsLine/ContactsLine";
import Logo from "./Logo/Logo";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={css.header}>
      <ContactsLine />
      <Container>
        <div className={css.stikyHeader}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
