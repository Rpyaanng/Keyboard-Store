import { useEffect, useState } from "react";
import Axios from "axios";
import ProductListing from "./ProductListing";
import Wrapper from "../assets/wrappers/Recommended";
import SectionTitle from "./SectionTitle";
const Recommended = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await Axios.get("/api/v1/products");
    const { products } = response.data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      <div className="side-padding">
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