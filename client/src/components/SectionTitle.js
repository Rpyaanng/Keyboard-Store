import React from "react";
import Wrapper from "../assets/wrappers/SectionTitle";

const SectionTitle = ({ title }) => {
  return (
    <Wrapper className="side-margin-web">
      <span>{title}</span>
    </Wrapper>
  );
};

export default SectionTitle;
