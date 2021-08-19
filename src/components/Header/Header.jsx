import React from "react";
import { Container, Flex } from "../../style/globalStyle";

import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useHistory } from "react-router-dom";

import {
  Nav,
  Logo,
  SearchBar,
  Account,
  Return,
  Cart,
  Location,
} from "../../style/headerStyle";

const Header = () => {
  const history = useHistory();

  return (
    <Nav>
      <Container fluid>
        <Flex spaceBetween>
          <Logo>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkuoaZhOPgeDFgR1A8ltOLR-Xjz-p0mbGcg&usqp=CAU"
              alt=""
            />
          </Logo>

          <Location>
            <span>Hello</span>
            Select Your Location
          </Location>

          <SearchBar>
            <input type="text" />
            <button>
              {" "}
              <SearchIcon />{" "}
            </button>
          </SearchBar>

          <Account onClick={() => history.push("/signin")}>
            <span>Hello , Sign in</span>
            Accounts & List
          </Account>
          <Return>
            <span>Return</span>& Order
          </Return>
          <Cart>
            {" "}
            <AddShoppingCartIcon /> cart
          </Cart>
        </Flex>
      </Container>
    </Nav>
  );
};

export default Header;
