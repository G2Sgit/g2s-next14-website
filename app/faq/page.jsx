import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Header from "@/components/Header/Header";
import { faqList } from "../../data/questionsAndAnswers";
import Accordion from "@/components/FaqPageComponents/Accordion/Accordion";

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
          <Accordion faqList={faqList} />
        </Container>
      </Section>
    </main>
  </>
  );
};

export default FAQPage;
