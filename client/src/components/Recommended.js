import { useEffect, useState } from "react";
import Axios from "axios";
import ProductListing from "./ProductListing";
import Wrapper from "../assets/wrappers/Recommended";
import SectionTitle from "./SectionTitle";
import ProductlListingLoader from "./ProductlListingLoader";

const Recommended = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await Axios.get("/api/v1/products?limit=4");
    const { products } = response.data;
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (products == null) {
    return (
      <Wrapper>
        <div className="section">
          <SectionTitle title="Recommended" />
          <div className="products">
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
            <ProductlListingLoader />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="section">
        <SectionTitle title="Recommended" />
        <div className="products">
          {products.map((product) => (
            <ProductListing
              key={product._id}
              product={product}
            ></ProductListing>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Recommended;
