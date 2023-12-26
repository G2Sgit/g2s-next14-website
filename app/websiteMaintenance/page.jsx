import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";
import Image from "next/image";
import Heading from "@/components/ServisesComponents/Heading/Heading";
import css from "../../components/ServisesComponents/Section.module.scss";
import Header from "@/components/Header/Header";
import ContactsFormSection from "@/components/ServisesComponents/ContactsFormSection/ContactsFormSection";
import WebsiteMaintenanceSection from "@/components/ServisesComponents/WebsiteMaintenanceSection/WebsiteMaintenanceSection";

export const metadata = {
  title: "Website Maintenance",
  description: "G2S website maintenance page",
};

const WebsiteMaintenancePage = () => {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Website Maintenance"
          description="With London Web Studio, you can focus on growing your business while we take care of your online presence. No more worrying about downtime, security breaches, or outdated content. We've got it covered."
          watermark="Website Maintenance"
          primary={true}
        />
        <Section>
          <Container>
            <div className={css.headingSection}>
              <Image
                src="/img/services/sld2.png"
                width={640}
                height={470}
                alt="Picture of the team"
                loading="lazy"
                className={css.image}
              />
              <div className={css.textSection}>
                <Heading
                  partOne={"Your Website"}
                  accent={" Our Responsibility"}
                />
                <Paragraph content="In today's fast-paced digital world, your website is often the first point of contact for potential customers. It's your virtual storefront, and its reliability, performance, and security are paramount to your online success. That's where London Web Studio Website Maintenance Services comes in – your trusted partner in safeguarding and enhancing your digital presence." />
                <Paragraph content="At London Web Studio, we understand the critical role your website plays in your business. We're not just another service provider; we're your digital guardian. Our mission is clear: to ensure your website remains a beacon of excellence, consistently delivering an outstanding user experience." />
              </div>
            </div>
          </Container>
        </Section>
        <WebsiteMaintenanceSection />
        <ContactsFormSection
          sectionTitle="Contact Links & Contact Form"
          hidden
        />
      </main>
    </>
  );
};

export default WebsiteMaintenancePage;
