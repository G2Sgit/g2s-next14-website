import Container from "@/components/Container/Container";
import css from "./WebsiteMaintenanceSection.module.scss";
import FeaturesList from "../FeaturesList/FeaturesList";
import MaintenanceSectionHeading from "../MaintenanceSectionHeading/MaintenanceSectionHeading";
import MaintenanceAdditionals from "../MaintenanceAdditionals/MaintenanceAdditionals";

const sectionContent = [
  {
    id: 1,
    title: "Proactive Maintenance",
    text: "We don't wait for issues to arise; we prevent them. Our team of expert technicians conducts proactive maintenance to keep your website running smoothly, optimizing its performance, and addressing potential vulnerabilities before they become problems.",
  },
  {
    id: 2,
    title: "Security First",
    text: "In an era of increasing cyber threats, your website's security is non-negotiable. London Web Studio Website Maintenance Services employs state-of-the-art security measures to protect your online assets, keeping your data and your customers' information safe.",
  },
  {
    id: 3,
    title: "Regular Updates",
    text: "Staying up-to-date is crucial in the ever-evolving digital landscape. We ensure your website is running the latest software, plugins, and features, so you're always at the cutting edge of technology. You're always informed about the status of your digital asset.",
  },
];

export default function WebsiteMaintenanceSection() {
  return (
    <section className={css.section}>
      <Container>
        <MaintenanceSectionHeading
          titlePart="What Sets Us"
          titleAccent=" Apart"
          titleRestPart="?"
          subtitle="OUR COMMITMENT TO EXCELLENCE"
        />
        <FeaturesList features={sectionContent} />
        <MaintenanceAdditionals />
      </Container>
    </section>
  );
}
