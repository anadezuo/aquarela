import Section from "components/molecules/Section";
import React from "react";
import AccordionGroup from "../AccordionGroup";
import Accordion from "./Accordion";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

const children = (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </p>
);

export const usage = () => (
  <Section inverse>
    <Accordion title="Título 1" children={children} />
    <Accordion title="Título 2" children={children} />
    <Accordion title="Título 3" children={children} />
  </Section>
);

export const WithGroup = () => (
  <Section inverse>
    <AccordionGroup>
      <Accordion title="Título 1" children={children} />
      <Accordion title="Título 2" children={children} />
      <Accordion title="Título 3" children={children} />
    </AccordionGroup>
  </Section>
);
