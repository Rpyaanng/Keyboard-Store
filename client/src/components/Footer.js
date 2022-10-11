import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import Logo from "./Logo";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="side-margin">
        <Logo />
        <div className="content side-margin">
          <div>
            <h4>Contact Information:</h4>
            <ul>
              <li>Support:</li>
              <li>Address:</li>
              <li>Phone Number:</li>
            </ul>
          </div>
          <div>
            <h4>Socials:</h4>
            <ul className="icons">
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaFacebookSquare />
              <FaDiscord />
            </ul>
          </div>
          <div>
            <h4>Message:</h4>
            <p>
              This site is for the purpose of my portfolio. Feel free to contact
              me at my linkedin, for any questions. This site is not used for
              any commerical purposes.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
