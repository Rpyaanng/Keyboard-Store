import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  ShoppingCart,
  Modal,
} from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <Modal />
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
        <ShoppingCart />
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
