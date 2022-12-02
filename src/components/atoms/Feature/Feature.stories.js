import React from "react";
import { FaCar } from "react-icons/fa";
import { CiUser, CiRainbow, CiTwitter, CiSun } from "react-icons/ci";
import Grid from "components/atoms/Grid/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Título">
    <p>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s.
    </p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<CiUser />} title="Pessoas e detalhes da face">
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </Feature>
    <Feature icon={<CiRainbow />} title="Paisagens e horizontes">
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </Feature>
    <Feature icon={<CiTwitter />} title="Animais">
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </Feature>
    <Feature icon={<CiSun />} title="Céu">
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </Feature>
  </Grid>
);
