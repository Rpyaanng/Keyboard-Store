import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ShoppingCartItem from "./ShoppingCartItem";
import Wrapper from "../assets/wrappers/ShoppingCart";
import { useState, useEffect } from "react";

const ShoppingCart = () => {
  const { showShoppingCart, shoppingCart } = useAppContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let runningTotal = 0;
    Object.entries(shoppingCart).map(([key, values]) => {
      runningTotal += values.price * values.quantity;
    });
    setTotal(runningTotal);
  }, [shoppingCart]);

  return (
    <Wrapper>
      <div
        className={
          showShoppingCart
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <div className="content">
          <div className="top">
            <h4>Shopping Cart</h4>
          </div>
          <div className="middle">
            <ul>
              {Object.entries(shoppingCart).map(([key, values]) => {
                return <ShoppingCartItem key={key} item={values} />;
              })}
            </ul>
          </div>
          <div className="bottom">
            <h3>Total: ${total}</h3>
            <button className="btn primary checkout">Checkout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ShoppingCart;
