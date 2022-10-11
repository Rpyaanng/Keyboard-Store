import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper>
      <ReactLogo className="logo" />
      <h3 className="text">MATCHA_KEYS</h3>
    </Wrapper>
  );
};

export default Logo;
