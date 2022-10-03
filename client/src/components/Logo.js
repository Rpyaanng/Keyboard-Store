import React from "react";
import logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/Logo";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <img src={logo} alt="KeyboardStore" className="logo" />
      </NavLink>
    </Wrapper>
  );
};

export default Logo;
