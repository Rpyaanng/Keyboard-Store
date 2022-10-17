import React from "react";
import ContentLoader from "react-content-loader";

const GenericLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      backgroundColor="#c7c7c7"
      foregroundColor="#ecebeb"
      style={{ rect: { clipPath: "inherit" } }}
      {...props}
    >
      <rect x="0" y="0" clipPath="" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default GenericLoader;
