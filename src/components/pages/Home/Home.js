import React from "react";
import { CiUser, CiRainbow, CiTwitter, CiSun } from "react-icons/ci";
import BUTTON_COLORS from "constants/ButtonColors";
import BUTTON_VARIANTS from "constants/ButtonVariants";
import BgBrushImage from "assets/bg-brush.jpg";
import WatercolorVideo from "assets/watercolor.mp4";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Hero from "components/molecules/Hero";
import Footer from "components/organisms/Footer";

const Home = () => (
  <>
    <Hero image={BgBrushImage}>
      <Heading>
        <h1>
          Inspire um <strong>mundo</strong> mais
          <br />
          colorido
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur.</li>
      </ul>
      <Button color={BUTTON_COLORS.PRIMARY} variant={BUTTON_VARIANTS.OUTLINED}>
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<CiUser />} title="Pessoas e detalhes da face">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </Feature>
        <Feature icon={<CiRainbow />} title="Paisagens e horizontes">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </Feature>
        <Feature icon={<CiTwitter />} title="Animais">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </Feature>
        <Feature icon={<CiSun />} title="Céu">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conteúdo das aulas</h2>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Quem sou eu</h2>
          </Heading>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <Button color={BUTTON_COLORS.PRIMARY}>Saiba mais</Button>
        </div>
        <div>
          <video src={WatercolorVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas frequentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

export default Home;