import React from "react";
import Wrapper from "../assets/wrappers/SearchResult";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ item }) => {
  const { _id, name, price, images } = item;
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/product/${_id}`)}>
      <div>
        <div className="body">
          <div className="thumbnail">
            <img src={images[0]} alt={name + " image"}></img>
          </div>
          <div className="content-box">
            <div className="product-name">{name}</div>
            <div className="details">See details</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchResult;
