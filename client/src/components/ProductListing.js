import Wrapper from "../assets/wrappers/ProductListing";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductListing = ({ product }) => {
  const { _id, name, description, price, rating, images } = product;
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
          <div className="imgContainer">
            <img src={images[0]} alt="product" />
          </div>
          <div className="main-info">
            <h1 className="name">{name}</h1>
            <h2 className="price">${price}</h2>
            <div className="rating">
              {Array(rating)
                .fill()
                .map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              {Array(5 - rating)
                .fill()
                .map((_, idx) => (
                  <FaRegStar key={idx} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductListing;
