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

import Teacher1 from "draws/teachers/Teacher1";
import Teacher2 from "draws/teachers/Teacher2";
import Teacher3 from "draws/teachers/Teacher3";
import Teacher4 from "draws/teachers/Teacher4";
import Teacher5 from "draws/teachers/Teacher5";
import Teacher6 from "draws/teachers/Teacher6";
import Teacher7 from "draws/teachers/Teacher7";
import Card, { CardMedia } from "components/atoms/Card";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

function buildCardTeachers() {
  const names = [
    "Amy",
    "Bernardo",
    "Camila",
    "Deborah",
    "Eliane",
    "Flávio",
    "Gleen",
  ];
  const teachersAvatar = [
    <Teacher1 />,
    <Teacher2 />,
    <Teacher3 />,
    <Teacher4 />,
    <Teacher5 />,
    <Teacher6 />,
    <Teacher7 />,
  ];
  return Array(7)
    .fill({})
    .map((_, index) => (
      <Card key={index}>
        <CardMedia
          svg={<Teacher1 />}
          children={
            <>
              {teachersAvatar[index]}
              <h5>{names[index]}</h5>
            </>
          }
        />
      </Card>
    ));
}

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
        <Grid sm={2} md={3} lg={4}>
          {buildCardTeachers()}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
