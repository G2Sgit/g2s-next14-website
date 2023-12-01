import Container from "@/components/Container/Container";
import AdressList from "./AddressList/AdressList";
import css from "./ContactsLine.module.scss";
import SocialIcons from "./SocialIcons/SocialIcons";

const ContactsLine = () => {
  return (
    <div className={css.contactsLine}>
      <Container>
        <div className={css.contactsLineWrapper}>
          <AdressList />
          <SocialIcons />
        </div>
      </Container>
    </div>
  );
};

export default ContactsLine;
