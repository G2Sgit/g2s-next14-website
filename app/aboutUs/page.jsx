import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";

export const metadata = {
  title: "About",
  description: "G2S about page",
};

const AboutPage = () => {
  return (
    <main>
      <PageHero
        title="About Us"
        description="London Web Studio has been at the forefront of the digital evolution. With a passion for pixel-perfect designs and a commitment to the latest web technologies, we've been shaping the web landscape since our inception."
        watermark="about"
      />
      <Section>
        <Container>
          <Paragraph
            content="ABOUT Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ABOUT Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ABOUT Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ABOUT Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ABOUT Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
        </Container>
      </Section>
    </main>
  );
};

export default AboutPage;
