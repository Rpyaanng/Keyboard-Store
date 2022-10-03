import Wrapper from "../assets/wrappers/ShoppingCartItem";
import { useAppContext } from "../context/appContext";

const ShoppingCartItem = ({ item }) => {
  const { setShoppingCartItem, deleteShoppingCartItem } = useAppContext();
  const { id, name, quantity, price, imageUrl } = item;

  return (
    <Wrapper>
      <div>
        <div className="body">
          <div className="thumbnail">
            <img src={imageUrl} alt={name + " image"}></img>
          </div>
          <div className="content-box">
            <h5 className="product-name">{name}</h5>
            <div>
              <span> ${price * quantity}</span>
              <input
                type="number"
                value={`${quantity}`}
                min={1}
                max={99}
                name="quantity"
                className="quantity-input"
                required
                onChange={(e) =>
                  setShoppingCartItem(id, { ...item, quantity: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="options">
          <button className="delete" onClick={() => deleteShoppingCartItem(id)}>
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default ShoppingCartItem;
