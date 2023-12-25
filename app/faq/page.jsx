import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "FAQ",
  description: "G2S FAQ page",
};

const FAQPage = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Frequently Asked Questions"
          description="Here are some frequently asked questions (FAQs) for London Web Studio pay per month website designing services."
          watermark="faq"
          primary={true}
        />
        <Section>
          <Container>
            <Paragraph
              content="FAQ Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="FAQ Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="FAQ Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="FAQ Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="FAQ Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default FAQPage;
