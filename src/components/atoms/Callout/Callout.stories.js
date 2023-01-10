import React from "react";
import Callout from "./Callout";

import SvgArt from "draws/Art";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
};
const title = "Título";
const description = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;

export const usage = () => (
  <Callout title={title} description={description} svg={<SvgArt />} />
);
