import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/ShoppingCart";

const ShoppingCart = () => {
  const { showShoppingCart } = useAppContext();

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
          <header>
            <h3>Shopping Cart</h3>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};
export default ShoppingCart;
