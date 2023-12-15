import css from "./ContactsDetails.module.scss";
import Container from "@/components/Container/Container";
import ContactsHeading from "../ContactsHeading/ContactsHeading";
import ContactsParagraph from "../ContactsParagraph/ContactsParagraph";
import ContactsList from "../ContactsList/ContactsList";
import ContactsForm from "../ContactsForm/ContactsForm";

const ContactsDetails = ({ sectionTitle, hidden }) => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={hidden ? css.titleHid : css.title}>{sectionTitle}</h2>
        <div className={css.thumb}>
          <div className={css["left-column"]}>
            <ContactsHeading text="London Web Studio" />
            <ContactsParagraph text="We are committed to providing excellent customer service and look forward to assisting you with your inquiries." />
            <ContactsList
              contacts={{
                address: "124 City Road, London EC1V 2NX",
                mailGeneral: "hi@LondonWeb.Studio",
                mailBilling: "billing@LondonWeb.Studio",
                phone: "+44 7449 187945",
              }}
            />
          </div>
          <div className={css["right-column"]}>
            <ContactsHeading text="Contact Us" light={true} />
            <ContactsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsDetails;
