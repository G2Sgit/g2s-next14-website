import Section from "@/components/Section/Section";
import PageHero from "@/components/PageHero/PageHero";



import GetStartedSection from "@/components/HomePageComponents/GetStartedSection/GetStartedSection";
import AboutUsWithNumbers from "@/components/AboutUsPageComponents/AboutUsWithNumbers/AboutUsWithNumbers";
import WhyChoseUs from "@/components/AboutUsPageComponents/WhyChoseUs/WhyChoseUs";

export const metadata = {
  title: "About",
  description: "G2S about page",
};

const AboutPage = () => {
  return (
    <main>
       <PageHero
        title="About Us"
        description="London Web Studio has been at the forefront of the digital evolution. With a passion for pixel-perfect designs and a commitment to the latest web technologies, we&apos;ve been shaping the web landscape since our inception."
        watermark="ABOUT"
        primary={false}
      />
      <Section>
      <AboutUsWithNumbers />
      </Section>
      <Section>
      <WhyChoseUs/>
      </Section>
      <GetStartedSection />
    </main>
  );
};

export default AboutPage;
