import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  ShoppingCart,
  Footer,
} from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="container">
        <BigSidebar />
        <div className="main-content">
          <Navbar />
          <div>
            <Outlet />
            <Footer />
          </div>
        </div>
        <ShoppingCart />
      </div>
    </Wrapper>
  );
};
export default SharedLayout;
