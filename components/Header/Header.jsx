import css from "./Header.module.scss";

import Navigation from "../Navigation/Navigation";
import ContactsLine from "./ContactsLine/ContactsLine";
import Logo from "./Logo/Logo";
import Container from "../Container/Container";
import NavigationLine from "./ContactsLine/NavigationLine/NavigationLine";

const Header = ({ isHomePage }) => {
  return (
    <header className={css.header}>
      <ContactsLine primary={isHomePage} />
      {/* <Container> */}
      {/* <div className={css.stikyHeader}>
          <Logo isHomePage={isHomePage} />
          <Navigation isHomePage={isHomePage} />
        </div> */}
      <NavigationLine isHomePage={isHomePage} />
      {/* </Container> */}
    </header>
  );
};

export default Header;
