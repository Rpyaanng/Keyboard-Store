import React from "react";

import { SectionTitle } from "./";
import Wrapper from "../assets/wrappers/CategoryFeature";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import ProductListing from "./ProductListing";
import categories from "../utils/categories";

const CategoryFeature = ({ title, category }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await Axios.get(
      `/api/v1/products/category/${categories[category]}?limit=3`
    );
    const { products } = response.data;
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Wrapper className="side-margin ui-1">
      <SectionTitle title={`${title}`} />
      <div className="products side-margin-web">
        {products.map((product) => (
          <ProductListing
            key={product._id}
            product={product}
            isLoading={isLoading}
          ></ProductListing>
        ))}
        {products[0] && (
          <div onClick={() => navigate(`/category/${category}`)}>
            <div className="product-img more">
              <img src={products[0].images[0]} className="more" alt="product" />
              <div className="centered">Click For More</div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CategoryFeature;
