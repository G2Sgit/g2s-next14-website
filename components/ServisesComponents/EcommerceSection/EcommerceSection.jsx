import Container from "@/components/Container/Container";
import css from "./EcommerceSection.module.scss";
import FeaturesList from "../FeaturesList/FeaturesList";

const sectionContent = [
  {
    id: 1,
    title: "Business-to-Business",
    text: "Shift your offline territory to a more rigid online Ecommerce platform to target larger audiences.",
  },
  {
    id: 2,
    title: "Business-to-Consumer",
    text: "Reach out to more prospects locally and globally by introducing your brand to an online community.",
  },
  {
    id: 3,
    title: "Complete Automation",
    text: "Streamline  business processes with ecommerce and focus on things that help in business growth.",
  },
];

export default function EcommerceSection() {
  return (
    <section className={css.section}>
      <Container>
        <FeaturesList features={sectionContent} />
      </Container>
    </section>
  );
}
