import React from "react";

import ContentLoader from "react-content-loader";

const ProductlListingLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={250}
      backgroundColor="#c7c7c7"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="1" y="1" rx="4" ry="4" width="100%" height="127" />
      <rect x="2" y="141" rx="4" ry="4" width="96" height="16" />
      <rect x="2" y="166" rx="4" ry="4" width="139" height="18" />
      <rect x="2" y="191" rx="4" ry="4" width="99" height="26" />
    </ContentLoader>
  );
};

export default ProductlListingLoader;
