import React from "react";
import { FaIdCard, FaScroll, FaHome } from "react-icons/fa";
import PropTypes from "prop-types";
import styled from "styled-components";
import Callout from "components/atoms/Callout";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";

import BgAboutImage from "assets/bg-about.jpg";
import Section from "components/molecules/Section";
import Art from "draws/Art";
import Footer from "components/organisms/Footer";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => {
  return (
    <>
      <Hero image={BgAboutImage}>
        <Heading>
          <h1> Nome do serviço</h1>
        </Heading>
      </Hero>
      <Section>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            Certidão de nascimento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout
          title={"Título"}
          description={`What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
          svg={<Art />}
        />
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
