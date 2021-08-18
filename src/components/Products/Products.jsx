import React from "react";
import Slider from "react-slick";

import { Container } from "../../style/globalStyle";
import {
  ProductRow,
  ProductHeading,
  ProductSection,
} from "../../style/productStyle";
import Card from "../Card/Card";

const Products = ({ name, product }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
  };

  return (
    <>
      <ProductRow>
        <Container fluid>
          <ProductHeading>{name}</ProductHeading>
          <ProductSection>
            <Slider {...settings}>
              {product.map(({ src, price }) => {
                return <Card src={src} price={price} />;
              })}
            </Slider>
          </ProductSection>
        </Container>
      </ProductRow>
    </>
  );
};

export default Products;
