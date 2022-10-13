import React from "react";
import Wrapper from "../assets/wrappers/SectionTitle";

const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <span>{title}</span>
    </Wrapper>
  );
};

export default SectionTitle;
