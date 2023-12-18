import Container from "@/components/Container/Container";
import css from "./WebDesignSection.module.scss";
import FeaturesList from "../FeaturesList/FeaturesList";

const sectionContent = [
  {
    id: 1,
    title: "Custom Solutions",
    text: " We don't believe in one-size-fits-all solutions. Every project we undertake is unique, and we tailor our designs to meet your specific needs and objectives, as per your requirements.",
  },
  {
    id: 2,
    title: "Cutting-Edge Technology",
    text: " We are well-versed in the latest web technologies and trends. We use state-of-the-art tools and frameworks to build websites that are fast, secure, and future-proof.",
  },
  {
    id: 3,
    title: "Collaborative Partnership",
    text: "  We view our clients as partners. We listen to your ideas, goals, and feedback at every stage of the project, ensuring that the final product aligns with your vision.",
  },
];

export default function WebDesignSection() {
  return (
    <section className={css.section}>
      {/* <div className={css.wrapper}> */}
      <Container>
        <FeaturesList features={sectionContent} />
      </Container>
      {/* </div> */}
    </section>
  );
}
