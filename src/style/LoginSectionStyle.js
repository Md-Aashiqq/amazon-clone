import styled, { css } from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const HeadingLine = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  outline: none;
  padding: 10px;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.color};
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  ${(props) =>
    props.normal &&
    css`
      background: #dee1e6 !important;
      border: 1px solid rgba(0, 0, 0, 0.3);
      margin-top: 14px;
      color: ${(props) => props.theme.secondary};
    `}
`;
export const SubHeading = styled.div`
  font-size: 11px;
  margin-top: 5px;
  text-align: center;
  span {
    color: ${(props) => props.theme.link};
    cursor: pointer;
  }
`;
