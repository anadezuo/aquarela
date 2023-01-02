import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";

import BgAboutImage from "assets/bg-about.jpg";
import SvgAbout from "draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const About = () => {
  return (
    <>
      <Hero image={BgAboutImage}>
        <Heading>
          <h1>Aquarela</h1>
        </Heading>
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <ul>
              <li>Lorem Ipsum has been the industry's standard dummy text.</li>
              <li>
                Content here, content here', making it look like readable
                English.
              </li>
              <li>
                There are many variations of passages of Lorem Ipsum available.
              </li>
              <li>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined.
              </li>
              <li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
            </ul>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <center>
              <ImageContainer>
                <SvgAbout />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>
              A galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid md={2}></Grid>
      </Section>
      <Footer />
    </>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
