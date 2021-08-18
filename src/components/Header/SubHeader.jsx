import React from "react";

import { Container, Flex } from "../../style/globalStyle";
import { SubNav, Tabs, Tab, SubLogo } from "../../style/subHeaderStyle";

import { tabData } from "../../assets/data";

const SubHeader = () => {
  console.log(tabData);
  return (
    <SubNav>
      <Container>
        <Flex spaceBetween>
          <Tabs>
            {tabData.map(({ name }, index) => {
              return <Tab key={index}>{name}</Tab>;
            })}
          </Tabs>
          <SubLogo>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
              alt="logo"
            />
          </SubLogo>
        </Flex>
      </Container>
    </SubNav>
  );
};

export default SubHeader;
