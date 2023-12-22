import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Paragraph from "@/components/Paragraph/Paragraph";
import MainHero from "@/components/HomePageComponents/MainHero/MainHero";
import AboutUsSection from "@/components/HomePageComponents/AboutUsSection/AboutUsSection";
import RecentProjectsSection from "../components/HomePageComponents/RecentProjectsSection/RecentProjectsSection";
import ServicesSection from "@/components/HomePageComponents/ServicesSection/ServicesSection";
import GetStartedSection from "@/components/HomePageComponents/GetStartedSection/GetStartedSection";
// import Loader from "@/components/Loader/Loader";

export const metadata = {
  title: "G2S",
  description: "G2S home page",
};

const HomePage = () => {
  return (
    <>
      <MainHero />
      {/* <Section>
        <Loader />
      </Section> */}
      <Section>
        <AboutUsSection />
      </Section>
      <Section>
        <ServicesSection />
      </Section>
      <RecentProjectsSection />

      <GetStartedSection />
    </>
  );
};

export default HomePage;
