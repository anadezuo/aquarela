import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductType from "models/types/ProductType";
import BUTTON_COLORS from "constants/ButtonColors";
import BUTTON_VARIANTS from "constants/ButtonVariants";
import Grid from "components/atoms/Grid";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import styled from "styled-components";

const Toolbar = styled.div`
  margin: 40px;
  text-align: center;
`;

const MIN_PRODUCTS = 3;

const ALL_PRODUCTS = "Lista completa de serviços";
const HIDE_PRODUCTS = "Esconder lista de serviços";

const ProductGrid = ({ products }) => {
  const [isShowAllProducts, setVisibilityAllProducts] = useState(false);
  const filtered = isShowAllProducts ? products : products.slice(0, 3);
  const shouldShowToggle = products?.length > MIN_PRODUCTS;

  return (
    <>
      <Grid md={3}>
        {filtered?.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6> {product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Button
                  color={BUTTON_COLORS.PRIMARY}
                  variant={BUTTON_VARIANTS.LINK}
                  as={Link}
                  to={`servicos/${product.slang}`}
                >
                  Saiba mais
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {shouldShowToggle && (
        <Toolbar>
          <Button
            id="#allProductsButton"
            variant={BUTTON_VARIANTS.OUTLINED}
            onClick={() => setVisibilityAllProducts(!isShowAllProducts)}
          >
            {isShowAllProducts ? HIDE_PRODUCTS : ALL_PRODUCTS}
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

ProductGrid.defaultProps = {
  products: [],
};

export default ProductGrid;
