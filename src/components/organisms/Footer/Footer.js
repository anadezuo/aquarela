import React from "react";
import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Root = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.contrast};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  padding: 40px 0;

  h6 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.primary.contrastText};
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6> Aquarela</h6>
          </Heading>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div>
          <Heading>
            <h6> Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 3456-7890
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div>
          <Heading>
            <h6> Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink
              href="https://github.com/anadezuo/aquarela"
              target="_blank"
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              FaceBook
            </FooterLink>
          </p>
          <p>
            <FooterLink
              href="https://github.com/anadezuo/aquarela"
              target="_blank"
            >
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
          <p>
            <FooterLink
              href="https://github.com/anadezuo/aquarela"
              target="_blank"
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
