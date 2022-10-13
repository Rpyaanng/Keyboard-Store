import Wrapper from "../assets/wrappers/ProductListing";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";


const ProductListing = ({ product, isLoading }) => {
  const { _id, name, description, price, rating, images, numRatings } = product;
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        navigate(`/product/${_id}`);
      }}
    >
      <div className="product-listing">
        <div>
          {isLoading ? (
            <div className="product-img-loading">
              <div className="activity"></div>
            </div>
          ) : (
            <div className="product-img">
              <img src={images[0]} alt="product" />
            </div>
          )}

          <div className="main-info">
            <div className="main-details">
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
            </div>

            <span className="price">
              <span className="cents">$</span>
              <span className="dollar">{Math.floor(price)}</span>
              <span className="cents">
                {(price % 1).toFixed(2) * 100}
                {(price % 1).toFixed(2) * 100 == 0 ? 0 : ""}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductListing;
