import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";
import BUTTON_COLORS from "constants/ButtonColors";
import Button from "./Button";
import BUTTON_VARIANTS from "constants/ButtonVariants";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonDefault = ({ ...rest }) => (
  <Button {...events} {...rest}>
    Default
  </Button>
);

const ButtonPrimary = ({ ...rest }) => (
  <Button color={BUTTON_COLORS.PRIMARY} {...events} {...rest}>
    Primary
  </Button>
);

const ButtonDanger = ({ ...rest }) => (
  <Button color={BUTTON_COLORS.DANGER} {...events} {...rest}>
    Primary
  </Button>
);

const ButtonsWrapper = ({ ...rest }) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <ButtonDefault {...events} {...rest} />
      <ButtonPrimary {...events} {...rest} />
      <ButtonDanger {...events} {...rest} />
    </Toolbar>
    <p>As a link:</p>
    <Toolbar>
      <ButtonDefault as="a" href="#" {...events} {...rest} />
      <ButtonPrimary as="a" href="#" {...events} {...rest} />
      <ButtonDanger as="a" href="#" {...events} {...rest} />
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <ButtonDefault disabled {...events} {...rest} />
      <ButtonPrimary disabled {...events} {...rest} />
      <ButtonDanger disabled {...events} {...rest} />
    </Toolbar>
  </div>
);

const events = actions({ onClick: "clicked" });

export const usage = () => <ButtonsWrapper />;

export const Outlined = () => (
  <ButtonsWrapper variant={BUTTON_VARIANTS.OUTLINED} />
);

export const Link = () => <ButtonsWrapper variant={BUTTON_VARIANTS.LINK} />;
