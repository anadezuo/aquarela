import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";
import BUTTON_COLORS from "../../constants/ButtonColors";
import Button from "./Button";
import BUTTON_VARIANTS from "constants/ButtonVariants";

export default {
  title: "Components/Button",
  component: Button,
};

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const events = actions({ onClick: "clicked" });

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color={BUTTON_COLORS.PRIMARY} {...events}>
        Primary
      </Button>
      <Button color={BUTTON_COLORS.DANGER} {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button color={BUTTON_COLORS.PRIMARY} disabled {...events}>
        Primary
      </Button>
      <Button color={BUTTON_COLORS.DANGER} disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const Outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant={BUTTON_VARIANTS.OUTLINED} {...events}>
        Default
      </Button>

      <Button
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.OUTLINED}
        {...events}
      >
        Primary
      </Button>
      <Button
        color={BUTTON_COLORS.DANGER}
        variant={BUTTON_VARIANTS.OUTLINED}
        {...events}
      >
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant={BUTTON_VARIANTS.OUTLINED} disabled {...events}>
        Default
      </Button>
      <Button
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.OUTLINED}
        disabled
        {...events}
      >
        Primary
      </Button>
      <Button
        color={BUTTON_COLORS.DANGER}
        variant={BUTTON_VARIANTS.OUTLINED}
        disabled
        {...events}
      >
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const Link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant={BUTTON_VARIANTS.LINK} {...events}>
        Default
      </Button>

      <Button
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.LINK}
        {...events}
      >
        Primary
      </Button>
      <Button
        color={BUTTON_COLORS.DANGER}
        variant={BUTTON_VARIANTS.LINK}
        {...events}
      >
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant={BUTTON_VARIANTS.LINK} disabled {...events}>
        Default
      </Button>
      <Button
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.LINK}
        disabled
        {...events}
      >
        Primary
      </Button>
      <Button
        color={BUTTON_COLORS.DANGER}
        variant={BUTTON_VARIANTS.LINK}
        disabled
        {...events}
      >
        Danger
      </Button>
    </Toolbar>
  </div>
);
