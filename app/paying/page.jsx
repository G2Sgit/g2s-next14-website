import Section from "@/components/Section/Section";
import Container from "../../components/Container/Container";
import PageHero from "@/components/PageHero/PageHero";
import Paragraph from "@/components/Paragraph/Paragraph";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Pay Per Month",
  description: "G2S pay per month page",
};

const PayPerMonthPage = () => {
  return (
    <>
      <Header />

      <main>
        <PageHero
          title="Pay Per Month"
          description="Experience a new era of web design with London Web Studio—where affordability meets exceptional quality."
          watermark="Pay Per Month"
          primary={true}
        />
        <Section>
          <Container>
            <Paragraph
              content="PAYPERMONTH Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="PAYPERMONTH Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="PAYPERMONTH Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="PAYPERMONTH Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
            <Paragraph
              content="PAYPERMONTH Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt
            amet expedita delectus mollitia ipsum, suscipit laboriosam similique
            voluptatibus placeat, molestiae nemo quisquam magnam! Deleniti
            aliquid voluptatibus sequi voluptates expedita."
            />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default PayPerMonthPage;
