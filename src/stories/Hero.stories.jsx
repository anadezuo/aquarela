import React from "react";
import Hero from "../components/Hero";
import BgPaintingImage from "./assets/bg-painting.jpg";
import BgWatercolorImage from "./assets/bg-watercolor.jpg";

export default {
  title: "Hero",
  component: Hero,
};

const title = (<span>
  A beleza da <strong>vida</strong>
  <br/>
  pintada com água
</span>);
const children = (
  <ul>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </li>
  </ul>
);

export const usage = () => <Hero title={title} children={children} image={BgWatercolorImage}/>;

export const withList = () => (
  <Hero title={title} image={BgPaintingImage}>
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
