import Wrapper from "../../assets/wrappers/Product";
import { useAppContext } from "../../context/appContext";
import Axios from "axios";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Product = () => {
  const { setShoppingCartItem, shoppingCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    images: [],
    rating: 0,
    quantity: 0,
    description: "",
    categories: [],
    reviews: [],
    numRatings: 0,
  });

  const { id } = useParams();

  const getProduct = async () => {
    const response = await Axios.get(`/api/v1/products/${id}`);
    const { product } = response.data;
    setProduct(product);
    document.title = product.name;
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Wrapper>
      <div className="main">
        <div>
          <Carousel showThumbs={true} infiniteLoop={true}>
            {product.images.map((image, idx) => {
              return (
                <div className="holder product-img" key={idx}>
                  <img className="carousel-image" src={image} alt="product" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="form-div">
          <form className="">
            <h3 className="name">{product.name}</h3>
            <div className="rating">
              <a>
                {Array(product.rating)
                  .fill()
                  .map((_, idx) => (
                    <FaStar className="star" key={idx} />
                  ))}
                {Array(5 - product.rating)
                  .fill()
                  .map((_, idx) => (
                    <FaRegStar className="star" key={idx} />
                  ))}
                &nbsp;
                {product.numRatings
                  ? `${product.numRatings} Ratings`
                  : "No Ratings"}
              </a>
            </div>
            <span>Quantity: </span>
            <select onChange={(e) => setQuantity(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            {id in shoppingCart ? (
              <button
                className="btn-grad btn-block checkout"
                onClick={(e) => {
                  e.preventDefault();
                  setShoppingCartItem(id, {
                    id: id,
                    quantity: quantity,
                    imageUrl: product.images[0],
                    name: product.name,
                    price: product.price,
                  });
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button className="btn-grad btn-block checkout">
                Added To Cart
              </button>
            )}

            <hr></hr>
            <p className="price">${product.price.toFixed(2)}</p>
          </form>
          <hr></hr>
        </div>
      </div>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div>
      <div>
        <h1 className="reviews">Reviews</h1>
        {product.reviews ? <p>Reviews!</p> : <p>No Reviews for this product</p>}
      </div>
    </Wrapper>
  );
};
export default Product;
