import { useEffect, useState } from "react";
import Axios from "axios";
import ProductListing from "./ProductListing";
import Wrapper from "../assets/wrappers/Recommended";
const Recommended = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await Axios.get("/api/v1/products");
    const { products } = response.data;
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Wrapper>
      <h1>Recommended</h1>

      <div className="products">
        {products.map((product) => (
          <ProductListing key={product._id} product={product}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </ProductListing>
        ))}
      </div>
    </Wrapper>
  );
};
export default Recommended;
