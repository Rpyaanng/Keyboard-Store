import Wrapper from "../assets/wrappers/ShoppingCartItem";
import { useAppContext } from "../context/appContext";
import { HiSelector } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ShoppingCartItem = ({ item }) => {
  const { setShoppingCartItem, deleteShoppingCartItem } = useAppContext();
  const { id, name, quantity, price, imageUrl } = item;
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <div className="body">
          <div className="thumbnail">
            <img src={imageUrl} alt={name + " image"}></img>
          </div>
          <div className="content-box">
            <div className="product-name">{name}</div>
            <div className="details">
              <span className="price"> ${(price * quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="options">
          <button className="quantity btn">
            qty: {quantity} <HiSelector />
          </button>
          <button className="edit" onClick={() => navigate(`/product/${id}`)}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteShoppingCartItem(id)}>
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default ShoppingCartItem;
