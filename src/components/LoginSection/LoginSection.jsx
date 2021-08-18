import React from "react";
import {
  Button,
  HeadingLine,
  Login,
  Section,
  SubHeading,
} from "../../style/LoginSectionStyle";

const LoginSection = () => {
  return (
    <Login>
      <Section>
        <HeadingLine>See personalized recommendations</HeadingLine>
        <Button>Sign In</Button>
        <SubHeading>
          New Customer? <span>Start Here</span>
        </SubHeading>
      </Section>
    </Login>
  );
};

export default LoginSection;
