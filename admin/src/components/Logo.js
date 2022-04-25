import React from "react";
import logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Logo";
const Logo = () => {
  return (
    <Wrapper href="/">
      <img src={logo} alt="KeyboardStore" className="logo" />
    </Wrapper>
  );
};

export default Logo;
