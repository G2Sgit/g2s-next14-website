import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import AboutUsSection from "@/components/HomePageComponents/AboutUsSection/AboutUsSection";
import RecentlyProjectsSection from "../components/HomePageComponents/RecentlyProjectsSection/RecentlyProjectsSection";
import ServicesSection from "@/components/HomePageComponents/ServicesSection/ServicesSection";
import GetStartedSection from "@/components/HomePageComponents/GetStartedSection/GetStartedSection";


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
        <GetStartedSection />
      <Section>
        <Container>
          <RecentlyProjectsSection />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
