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
      `/api/v1/products/category/${categories[category]}?limit=4`
    );
    const { products } = response.data;
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Wrapper>
      <div className="section">
        <SectionTitle title={`${title}`} />
        <div className="products">
          {products.map((product) => (
            <ProductListing
              key={product._id}
              product={product}
              isLoading={isLoading}
            ></ProductListing>
          ))}
          {products[0] && (
            <div
              className="more-div"
              onClick={() => navigate(`/category/${category}`)}
            >
              <div className="product-img more">
                <img
                  src={products[0].images[0]}
                  className="more"
                  alt="product"
                />
              </div>
              <div className="centered">
                <p>More {category}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoryFeature;
