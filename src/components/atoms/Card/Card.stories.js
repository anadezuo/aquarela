import React from "react";
import BUTTON_COLORS from "constants/ButtonColors";
import BUTTON_VARIANTS from "constants/ButtonVariants";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Card, { CardBody, CardMedia } from "./Card";
import WaterColorKit from "assets/bg-watercolor-kit.jpeg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6> Título</h6>
        </Heading>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <Button color={BUTTON_COLORS.PRIMARY} variant={BUTTON_VARIANTS.LINK}>
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const WithImage = () => (
  <Section inverse>
    <Card>
      <CardMedia image={WaterColorKit} />
      <CardBody>
        <Heading>
          <h6> Título</h6>
        </Heading>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <Button color={BUTTON_COLORS.PRIMARY} variant={BUTTON_VARIANTS.LINK}>
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
