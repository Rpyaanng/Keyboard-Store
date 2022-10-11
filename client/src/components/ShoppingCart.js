import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ShoppingCartItem from "./ShoppingCartItem";
import Wrapper from "../assets/wrappers/ShoppingCart";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { showShoppingCart, shoppingCart } = useAppContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

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
            <span>
              Subtotal: <span className="subTotal">${total.toFixed(2)}</span>
            </span>

            <button
              className="btn primary checkout"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
          <div className="middle">
            {Object.entries(shoppingCart).map(([key, values]) => {
              return (
                <div>
                  <ShoppingCartItem key={key} item={values} />
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ShoppingCart;
