import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const Logo = styled.div`
  img {
    width: 100px;
    height: 36px;
  }
  margin-bottom: 20px;
`;
export const Box = styled.div`
  width: 340px;
  height: 270px;
  background: ${(props) => props.theme.white};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* justify-content: space-evenly; */
`;
export const Heading = styled.div`
  font-size: 28px;
  color: #111111;
  font-weight: 600;
  margin-bottom: 14px;
`;
export const Input = styled.div`
  span {
    padding: 2px 2px;
    font-size: 13px;
    color: #111111;
    font-weight: 500;
    display: block;
  }
  input {
    width: 93%;
    padding: 10px 10px;
    background: white;
    outline: none;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.secondary};
  }
  margin-bottom: 14px;
`;
export const Contain = styled.div`
  display: grid;
  place-items: center;
`;

export const Terms = styled.div`
  font-size: 12px;
  margin-top: 14px;

  span {
    color: ${(props) => props.theme.link};
    cursor: pointer;
  }
`;

export const Contain2 = styled.div`
  margin-top: 14px;
`;
