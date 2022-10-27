import React from "react";
import BgPaintingImage from "../../stories/assets/bg-painting.jpg";
import BgWatercolorImage from "../../stories/assets/bg-watercolor.jpg";
import Heading from '../Heading';
import Hero from '.'

export default {
  title: "Components/Hero",
  component: Hero,
};

const children =    (
  <>
   <Heading>
    <h1>
      A beleza da <strong>vida</strong>
      <br/>
      com água e cor
    </h1>
    </Heading>
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
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>
  </Hero>
);
