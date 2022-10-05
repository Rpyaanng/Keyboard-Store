import Wrapper from "../assets/wrappers/ProductListing";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductListing = ({ product }) => {
  const { _id, name, description, price, rating, images, numRatings } = product;
  const navigate = useNavigate();

  console.log(product);

  return (
    <Wrapper
      onClick={() => {
        navigate(`/product/${_id}`);
      }}
    >
      <div className="product-listing">
        <div>
          <div className="product-img">
            <img src={images[0]} alt="product" />
          </div>
          <div className="main-info">
            <span className="name">{name}</span>
            <div className="rating">
              {Array(rating)
                .fill()
                .map((_, idx) => (
                  <FaStar className="star" key={idx} />
                ))}
              {Array(5 - rating)
                .fill()
                .map((_, idx) => (
                  <FaRegStar className="star" key={idx} />
                ))}
              <a>{numRatings ? `${numRatings} Ratings` : "No Ratings"}</a>
            </div>
            <p className="price">${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductListing;
