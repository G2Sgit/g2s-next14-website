import ContactsHeading from "@/components/ContactPageComponents/ContactsHeading/ContactsHeading";
import css from ".//ContactsFormSection.module.scss";
import Container from "@/components/Container/Container";
import ContactsParagraph from "@/components/ContactPageComponents/ContactsParagraph/ContactsParagraph";
import ContactsList from "@/components/ContactPageComponents/ContactsList/ContactsList";
import ContactsForm from "@/components/ContactPageComponents/ContactsForm/ContactsForm";

const ContactsFormSection = ({ sectionTitle, hidden }) => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className={hidden ? css.titleHid : css.title}>{sectionTitle}</h2>
        <div className={css.thumb}>
          <div className={css["left-column"]}>
            <ContactsHeading text="Ready to take your online presence to the next level?" />
            <ContactsParagraph text="Contact London Web Studio today for a consultation. Let's turn your ideas into a digital reality that stands out in the online landscape." />
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
            <ContactsHeading text="Request a call back" light={true} />
            <ContactsForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsFormSection;
