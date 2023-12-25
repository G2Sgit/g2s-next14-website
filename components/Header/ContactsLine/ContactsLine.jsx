import Container from "@/components/Container/Container";
import AdressList from "./AddressList/AdressList";
import css from "./ContactsLine.module.scss";
import SocialIcons from "./SocialIcons/SocialIcons";

const ContactsLine = ({ primary }) => {
  return (
    <div className={primary ? css.contactsLine : css.pageContactsLine}>
      <Container>
        <div className={css.contactsLineWrapper}>
          <AdressList
            email={"hi@g2s.com"}
            phoneNumber={"380670000000"}
            address={"124 City Road, London, EC1V 2NX"}
            primary
          />
          <SocialIcons
            fb={"https://www.facebook.com/"}
            insta={"http://www.instagram.com/"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactsLine;
