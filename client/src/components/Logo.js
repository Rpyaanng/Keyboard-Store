/* eslint-disable */
import React from "react";
import { ReactComponent as ReactLogo } from "../assets/images/logo1.svg";
import { ReactComponent as AnimatedLogo } from "../assets/images/logo3.svg";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Logo";

const Logo = () => {
  const [isAnim, setIsAnim] = useState(false);
  return (
    <Wrapper>
      <div
        onMouseEnter={() => setIsAnim(true)}
        onMouseLeave={() => setIsAnim(false)}
      >
        {isAnim ? (
          <AnimatedLogo className="logo" />
        ) : (
          <ReactLogo className="logo" />
        )}
      </div>

      <h3 className="text">
        MATCHA<span className="matcha">_</span>KEYS
      </h3>
    </Wrapper>
  );
};

export default Logo;
