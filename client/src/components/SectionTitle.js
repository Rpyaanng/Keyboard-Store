import React from "react";
import Wrapper from "../assets/wrappers/SectionTitle";

const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <div className="title-div">
        <span>{title}</span>
      </div>
    </Wrapper>
  );
};

export default SectionTitle;
