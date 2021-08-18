import React from "react";
import { Product, ProductName, ProductImage } from "../../style/productStyle";

const Card = ({ src, price }) => {
  return (
    <div>
      {" "}
      <Product>
        <ProductImage>
          <img src={src} alt="product" />
        </ProductImage>

        <ProductName>{price}</ProductName>
      </Product>
    </div>
  );
};

export default Card;
