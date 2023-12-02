import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";

export const metadata = {
  title: "Website Maintenance",
  description: "G2S website maintenance page",
};

const WebsiteMaintenancePage = () => {
  return (
    <main>
      <PageHero
        title="Website Maintenance"
        description="With London Web Studio, you can focus on growing your business while we take care of your online presence. No more worrying about downtime, security breaches, or outdated content. We've got it covered."
        watermark="Website Maintenance"
        primary={true}
      />
      <Section>
        <Container>
          <Paragraph
            content="WEBSITE MAINTENANCE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="WEBSITE MAINTENANCE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="WEBSITE MAINTENANCE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="WEBSITE MAINTENANCE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
          <Paragraph
            content="WEBSITE MAINTENANCE Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
          />
        </Container>
      </Section>
    </main>
  );
};

export default WebsiteMaintenancePage;
