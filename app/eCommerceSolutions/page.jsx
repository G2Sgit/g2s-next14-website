import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Heading from "@/components/ServisesComponents/Heading/Heading";
import css from "../../components/ServisesComponents/Section.module.scss";
import EcommerceSection from "@/components/ServisesComponents/EcommerceSection/EcommerceSection";
import ContactsFormSection from "@/components/ServisesComponents/ContactsFormSection/ContactsFormSection";

export const metadata = {
  title: "E-Commerce Solutions",
  description: "G2S e-commerce solutions page",
};

const ECommerceSolutions = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="E-Commerce Solutions"
          description="At London Web Studio, we are more than just developers; we are architects of your online success story. With a steadfast commitment to innovation, creativity, and technological prowess, we transform your e-commerce dreams into seamless, eye-catching, and highly functional digital storefronts."
          watermark="E-Commerce"
          primary={true}
        />
        <Section>
          <Container>
            <div className={css.headingSection}>
              <Image
                src="/img/services/ecommerce.png"
                width={571}
                height={607}
                alt="Picture of the team"
                className={css.image}
              />
              <div className={css.textSection}>
                <Heading partOne={"Start your"} accent={" Online Store"} />
                <Paragraph content="n the ever-evolving landscape of e-commerce, where digital storefronts have become the gateway to global markets, it takes a specialized touch to turn visions into vibrant, profit-yielding realities. London Web Studio, a pioneering force in the realm of website development tailored specifically to the demands of the online retail world." />
                <Paragraph content="Our mission is clear: to empower businesses, both budding and established, to thrive in the digital marketplace through expertly crafted e-commerce solutions. With a rich history of excellence in web development, a talented team of seasoned professionals, and a passion for staying at the forefront of industry trends, London Web Studio is your trusted partner in harnessing the full potential of the online world. Whether you're embarking on your first e-commerce venture or seeking to enhance your existing online presence, we bring a wealth of expertise, dedication, and innovation to the table." />
              </div>
            </div>
          </Container>
        </Section>
        <EcommerceSection />
        <ContactsFormSection
          sectionTitle="Contact Links & Contact Form"
          hidden
        />
      </main>
    </>
  );
};

export default ECommerceSolutions;
