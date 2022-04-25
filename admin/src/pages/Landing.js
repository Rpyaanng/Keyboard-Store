import React from "react";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { History } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Customize your Dream <span> Keyboard</span> now!
          </h1>
          <p>
            Here at Keyboard-Store customize your keyboard for them most
            affordable price!
          </p>
          <p>Sign up now to sign up to create your dream keyboard!</p>
          <a href="/register" className="btn btn-hero">
            Login/Register
          </a>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
