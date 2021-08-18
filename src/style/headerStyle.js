import styled from "styled-components";

export const Nav = styled.div`
  width: 100vw;
  height: 48px;
  background: ${(props) => props.theme.header};
  padding: 9px;
`;
export const Logo = styled.div`
  img {
    width: 129px;
    height: 50px;
  }
`;
export const Location = styled.div`
  width: 167px;
  height: 50px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.white};
  span {
    display: block;
    font-size: 12px;
  }
`;
export const SearchBar = styled.div`
  width: 650px;
  height: 38px;
  /* flex: 1; */
  border-radius: 5px;
  display: flex;
  margin-right: 10px;

  input {
    /* width: 650px; */
    width: 100%;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-right: 0;
    padding: 8px;
    height: 38;
    outline: none;
  }
  button {
    width: 5%;
    height: 38px;
    padding: 8px;
    margin-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: none;
    background: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;
export const Account = styled.div`
  width: 167px;
  height: 50px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.white};
  span {
    display: block;
    font-size: 12px;
  }
`;
export const Return = styled.div`
  width: 77px;
  height: 50px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.white};
  span {
    display: block;
    font-size: 12px;
  }
`;
export const Cart = styled.div`
  width: 84px;
  height: 50px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
`;
