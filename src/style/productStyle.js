import styled from "styled-components";

export const ProductRow = styled.div`
  margin: 40px 20px;
  padding: 10px;
  width: 100%;
  height: 300px;
  background: ${(props) => props.theme.white};
`;

export const ProductHeading = styled.div`
  font-size: 21px;
  color: #444444;
`;

export const ProductSection = styled.div`
  padding: 20px;
`;

export const Product = styled.div`
  /* width: 230px;
  height: 200px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 17px;
  color: ${(props) => props.theme.color};
`;

export const ProductImage = styled.div``;
