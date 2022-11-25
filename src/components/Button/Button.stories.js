import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";
import BUTTON_COLORS from "../../constants/ButtonColors";
import Button from "./Button";

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
      <Button {...events}>Without color</Button>
      <Button color={BUTTON_COLORS.DEFAULT} {...events}>
        Default
      </Button>
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
        Without color
      </Button>
      <Button color={BUTTON_COLORS.DEFAULT} disabled {...events}>
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
