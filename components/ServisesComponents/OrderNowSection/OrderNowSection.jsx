import React from "react";
import css from "./OrderNowSection.module.scss";
import Section from "@/components/Section/Section";
import Paragraph from "@/components/Paragraph/Paragraph";
import Container from "@/components/Container/Container";

const OrderNowSection = () => {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <div className={css.content}>
            <h2 className={css.heading}>Get your website for just $299</h2>
            <Paragraph content="Our team of experienced designers and developers is committed to bringing your online vision to life. We listen to your needs, work closely with you, and ensure your satisfaction every step of the way." />
          </div>
          <button type="button" className={css.button}>
            Order now!
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default OrderNowSection;
