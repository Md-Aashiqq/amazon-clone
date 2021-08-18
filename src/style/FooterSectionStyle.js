import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  height: 250px;
  background: ${(props) => props.theme.subHeader};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Section = styled.div``;
export const Heading = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  margin: 10px 0px;
`;
export const Link = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.white};
  margin: 10px 0px;
  cursor: pointer;
`;

export const SubFooterSection = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => props.theme.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Heading1 = styled.h6`
  font-size: 11px;
  color: ${(props) => props.theme.white};
  margin: 0px 10px;
`;

export const CopyRight = styled.div`
  text-align: center;
  color: ${(props) => props.theme.white};
`;
export const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
