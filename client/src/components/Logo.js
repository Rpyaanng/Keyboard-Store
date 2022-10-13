import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper>
      <ReactLogo className="logo" />
      <h3 className="text">
        MATCHA<span className="matcha">_</span>KEYS
      </h3>
    </Wrapper>
  );
};

export default Logo;
