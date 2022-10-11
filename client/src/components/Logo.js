import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper>
      <ReactLogo className="logo" />
      <h1 className="text">MATCHA_KEYS</h1>
    </Wrapper>
  );
};

export default Logo;
