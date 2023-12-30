import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";
import GetStartedSection from "@/components/GetStartedSection/GetStartedSection";
import Image from "next/image";
import Heading from "@/components/ServisesComponents/Heading/Heading";
import css from "../../components/ServisesComponents/Section.module.scss";
import WebDesignSection from "@/components/ServisesComponents/WebDesignListSection/WebDesignSection";
import OrderNowSection from "@/components/ServisesComponents/OrderNowSection/OrderNowSection";
import Header from "@/components/Header/Header";
export const metadata = {
  title: "website designing",
  description: "G2S website designing page",
};

const WebsiteDesigningPage = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Web Design Agency UK"
          description="Welcome to London Web Studio, where creativity meets technology to bring your digital vision to life. We are a dynamic and innovative web design agency dedicated to crafting stunning, user-friendly, and highly functional websites that make a lasting impact."
          watermark="Web Designing"
          primary={true}
        />
        <Section>
          <Container>
            <div className={css.headingSection}>
              <Image
                src="/img/services1.jpeg"
                width={640}
                height={640}
                alt="Picture of the team"
                className={css.image}
              />
              <div className={css.textSection}>
                <Heading
                  partOne={"Premium"}
                  accent={" Web Design"}
                  partTwo={" Services"}
                />
                <Paragraph content=" At London Web Studio, our mission is simple: to help businesses and individuals thrive in the digital world. We believe that your online presence should not only reflect your unique identity but also serve as a powerful tool to achieve your goals. Whether you're a startup looking to establish your brand or an established business seeking a website makeover, we're here to make your online dreams a reality." />
                <Paragraph content=" Our team of talented designers has a keen eye for aesthetics and a passion for creating visually captivating websites. We understand that first impressions matter, and we ensure your website leaves a memorable one." />
                <Paragraph content="We prioritize user experience (UX) and usability in every project. Your website will not only look beautiful but also function seamlessly across all devices, providing a smooth and engaging experience for your visitors." />
              </div>
            </div>
          </Container>
        </Section>
        <WebDesignSection />
        <OrderNowSection />
        <GetStartedSection />
      </main>
    </>
  );
};

export default WebsiteDesigningPage;
