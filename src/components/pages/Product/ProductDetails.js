import React from "react";
import styled from "styled-components";
import { FaIdCard, FaScroll, FaHome } from "react-icons/fa";

import Callout from "components/atoms/Callout";
import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";

import Section from "components/molecules/Section";
import SvgArt from "draws/Art";
import Footer from "components/organisms/Footer";
import BreadCrumb from "components/atoms/BreadCrumb";
import ProductType from "models/types/ProductType";

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

const ProductDetails = ({ product }) => {
  const items = [
    { label: "Início", link: "/" },
    { label: "Serviço" },
    { label: product.title },
  ];

  return (
    <>
      <Hero image={product.image}>
        <Heading>
          <h1>{product.title}</h1>
        </Heading>
        <BreadCrumb items={items} />
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
            <FaScroll />
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
          title={"Quer ganhar um desconto nesse curso?"}
          description={`What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
          svg={<SvgArt />}
          buttonDescription="Saiba mais"
        />
      </Section>
      <Footer />
    </>
  );
};

ProductDetails.propTypes = {
  product: ProductType,
};

ProductDetails.defaultProps = {
  product: {},
};

export default ProductDetails;
