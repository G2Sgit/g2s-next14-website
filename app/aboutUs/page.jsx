import Section from "@/components/Section/Section";
import PageHero from "@/components/PageHero/PageHero";

import GetStartedSection from "@/components/GetStartedSection/GetStartedSection";
import AboutUsWithNumbers from "@/components/AboutUsPageComponents/AboutUsWithNumbers/AboutUsWithNumbers";
import WhyChoseUs from "@/components/AboutUsPageComponents/WhyChoseUs/WhyChoseUs";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "About",
  description: "G2S about page",
};

const AboutPage = () => {
  return (
    <>
      <Header />

      <main>
        <PageHero
          title="About Us"
          description="London Web Studio has been at the forefront of the digital evolution. With a passion for pixel-perfect designs and a commitment to the latest web technologies, we've been shaping the web landscape since our inception."
          watermark="ABOUT"
          primary={false}
        />
        <Section>
          <AboutUsWithNumbers />
        </Section>
        <Section>
          <WhyChoseUs />
        </Section>
        <GetStartedSection />
      </main>
    </>
  );
};

export default AboutPage;
