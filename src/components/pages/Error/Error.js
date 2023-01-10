import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import BUTTON_COLORS from "constants/ButtonColors";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  text-align: center;
  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Content = styled.div`
  text-align: center;
  p {
    margin: 32px 0;
    font-size: 1.2rem;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Error = ({ image, title, description }) => {
  return (
    <Root>
      <Section>
        <div>
          <ImageContainer>{image}</ImageContainer>
        </div>
        <Content>
          <Heading>
            <Title>{title}</Title>
          </Heading>
          <p>{description}</p>

          <Button as={Link} to="/" color={BUTTON_COLORS.PRIMARY}>
            Voltar para ao início
          </Button>
        </Content>
      </Section>
    </Root>
  );
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

Error.defaultProps = {
  image: undefined,
  title: "Erro",
  description: "Algum erro aconteceu.",
};

export default Error;
