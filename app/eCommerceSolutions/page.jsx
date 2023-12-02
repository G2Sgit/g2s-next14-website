import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";

export const metadata = {
  title: "E-Commerce Solutions",
  description: "G2S e-commerce solutions page",
};

const ECommerceSolutions = () => {
  return (
    <main>
      <PageHero
        title="E-Commerce Solutions"
        description="At London Web Studio, we are more than just developers; we are architects of your online success story. With a steadfast commitment to innovation, creativity, and technological prowess, we transform your e-commerce dreams into seamless, eye-catching, and highly functional digital storefronts."
        watermark="E-Commerce"
        primary={true}
      />
      <Section>
        <Container>
          <Paragraph
            content="ECOMMERCESOLUTIONS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ECOMMERCESOLUTIONS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ECOMMERCESOLUTIONS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ECOMMERCESOLUTIONS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="ECOMMERCESOLUTIONS Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
        </Container>
      </Section>
    </main>
  );
};

export default ECommerceSolutions;
