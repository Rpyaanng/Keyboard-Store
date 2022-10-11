import { useEffect, useState } from "react";
import Axios from "axios";
import ProductListing from "./ProductListing";
import Wrapper from "../assets/wrappers/Recommended";
import SectionTitle from "./SectionTitle";
const Recommended = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await Axios.get("/api/v1/products?limit=4");
    const { products } = response.data;
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper className="side-margin">
      <div>
        <SectionTitle title="Recommended" />
        <div className="products side-margin-web">
          {products.map((product) => (
            <ProductListing
              key={product._id}
              product={product}
            ></ProductListing>
          ))}
        </div>
        <hr></hr>
      </div>
    </Wrapper>
  );
};
export default Recommended;
