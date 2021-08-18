import styled from "styled-components";

export const SubNav = styled.div`
  width: 100vw;
  height: 39px;
  background: ${(props) => props.theme.subHeader};
  padding: 4px;
`;
export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Tab = styled.div`
  /* font-size: 12px; */
  font-weight: 400;
  margin-right: 14px;
  color: ${(props) => props.theme.white};
`;
export const SubLogo = styled.div``;
