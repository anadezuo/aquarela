import React from "react";
import { text } from '@storybook/addon-knobs'
import BUTTON_COLORS from 'constants/ButtonColors';
import BUTTON_VARIANTS from 'constants/ButtonVariants';
import BgPaintingImage from "../../stories/assets/bg-painting.jpg";
import BgWatercolorImage from "../../stories/assets/bg-watercolor.jpg";
import Button from 'components/Button';
import Heading from '../Heading';
import Hero from '.'

export default {
  title: "Components/Hero",
  component: Hero,
};

const children =    (
  <>
    <h1>
      A beleza da <strong>vida</strong>
      <br/>
      com água e cor
    </h1>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>
  </>
);

export const usage = () => <Hero image={BgWatercolorImage} children={children}/>;

export const withList = () => (
  <Hero image={BgPaintingImage}>
    <Heading>
      <h1>
        {text('Title', 'Inspire um mundo colorido')}
      </h1>
    </Heading>
    <ul>
      <li>
        {text('Description 1', '1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
      </li>
      <li>
        {text('Description 2', '2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
         'tempor incididunt ut labore et dolore magna aliqua.')}
      </li>
      <li>
        {text('Description 3', `3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`)}
      </li>
    </ul>
    <Button color={BUTTON_COLORS.PRIMARY} variant={BUTTON_VARIANTS.OUTLINED}> Matricule-se agora</Button>
  </Hero>
);
