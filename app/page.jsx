import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/MainHero/MainHero";
import AboutUsSection from "@/components/HomePageComponents/AboutUsSection/AboutUsSection";
import ServicesSection from "@/components/HomePageComponents/ServicesSection/ServicesSection";
import GetStartedSection from "@/components/HomePageComponents/GetstartedSection/GetstartedSection";

export const metadata = {
  title: "G2S",
  description: "G2S home page",
};

const HomePage = () => {
  return (
    <>
      <MainHero />
      <Section>
        <AboutUsSection />
      </Section>
      <Section>
        <ServicesSection />
      </Section>
      <Section>
        <GetStartedSection />
      </Section>
      <Section>
        <Container>
          <PageTitle text="Home Page" />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="HOME PAGE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
