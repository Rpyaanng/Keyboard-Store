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
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div className="main-content">
          <Navbar />
          <div>
            <Outlet />
            <Footer />
          </div>
        </div>
        <ShoppingCart />
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
