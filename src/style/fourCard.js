import styled from "styled-components";

export const Card = styled.div`
  width: 25%;
  height: 400px;
  background: ${(props) => props.theme.white};
  padding: 20px 15px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: flex-; */
`;
export const CardTitle = styled.div`
  font-size: 21px;
  color: ${(props) => props.theme.color};
  font-weight: 500;
`;
export const ImageSection = styled.div`
  display: grid;
  /* padding: 20px; */
  grid-template-columns: 50% 50%;
  grid-template-rows: 150px 150px;
  margin-top: 10px;
`;
export const Images = styled.div`
  width: 100px;
  height: 150px;
  margin: 0px 10px;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;
export const ImageTitle = styled.div`
  font-size: 12px;
`;
export const Image = styled.div``;
export const Footer = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.link};
  cursor: pointer;
`;
