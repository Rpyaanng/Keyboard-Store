import Wrapper from "../../assets/wrappers/CreateProduct";

import { useAppContext } from "../../context/appContext";

import Axios from "axios";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Product = () => {
  const { setShoppingCartItem } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    images: [],
    rating: 0,
    quantity: 0,
    description: "",
    categories: [],
  });

  const { id } = useParams();

  const getProduct = async () => {
    const response = await Axios.get(`/api/v1/products/${id}`);
    const { product } = response.data;
    setProduct(product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="main">
          <div>
            <Carousel showThumbs={true} infiniteLoop={true}>
              {product.images.map((image, idx) => {
                return (
                  <div className="holder" key={idx}>
                    <img className="carousel-image" src={image} alt="product" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <form>
              <h2 className="name">{product.name}</h2>
              <h3 className="price">${product.price}</h3>
              <div className="rating">
                {Array(product.rating)
                  .fill()
                  .map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                {Array(5 - product.rating)
                  .fill()
                  .map((_, idx) => (
                    <FaRegStar key={idx} />
                  ))}
              </div>
              <select onChange={(e) => setQuantity(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button
                className="btn btn-block"
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
                Add to Shopping Cart
              </button>
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Product;
