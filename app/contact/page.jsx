import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import ContactsDetails from "@/components/ContactPageComponents/ContactsDetails/ContactsDetails";
import Paragraph from "@/components/Paragraph/Paragraph";
import ContactsMap from "@/components/ContactPageComponents/ContactsMap/ContactsMap";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Contact",
  description: "G2S contact page",
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          description="Thank you for your interest in London Web Studio. We value your
              feedback, inquiries, and suggestions. Please feel free to reach out
              to us using the following contact information:"
          watermark="Contact"
          primary={true}
        />
        <ContactsDetails
          sectionTitle="Contact Links & Contact Form"
          hidden={true}
        />
        <ContactsMap />
      </main>
    </>
  );
};

export default ContactPage;
