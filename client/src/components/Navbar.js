import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { MdFormatAlignLeft } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    user,
    setShowSidebar,
    showSidebar,
    setShoppingCart,
    shoppingCart,
    logoutUser,
    isMainPage,
    showShoppingCart,
  } = useAppContext();

  const [showStatus, setShowStatus] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="nav-center ui-1">
        <div className="left">
          <div className="left-1">
            <button
              className="sidebar-btn"
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <MdFormatAlignLeft></MdFormatAlignLeft>
            </button>
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className={isMainPage ? "left-2" : "left-2 not-main"}>
            {!isMainPage && (
              <button className="back-arrow" onClick={() => navigate(-1)}>
                <BsArrowLeft></BsArrowLeft>
              </button>
            )}
          </div>
        </div>
        <div className="middle">
          <div className="search-div btn-container">
            <input className="main-input" placeholder="Search for Product" />
            <div className="dropdown">
              <button className="dropdown-btn">hello</button>
            </div>
          </div>

          <button className="search">
            <FaSearch />
          </button>
        </div>
        <div className="right">
          <div className="btn-container">
            <button className="btn" onClick={() => setShowStatus(!showStatus)}>
              <TiUser></TiUser>
              {user ? user.firstName : "not logged in"}
              <FaCaretDown></FaCaretDown>
            </button>
            <div className={showStatus ? "dropdown show-dropdown" : "dropdown"}>
              {user ? (
                <>
                  <Link to="/profile">
                    <button className="dropdown-btn">Profile</button>
                  </Link>
                  <button
                    onClick={() => {
                      logoutUser();
                    }}
                    className="dropdown-btn"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/register">
                  <button className="dropdown-btn">login</button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <button
              className="toggle-btn"
              onClick={() => setShoppingCart(!showShoppingCart)}
            >
              <AiOutlineShoppingCart />
              <div className="shopping-cart-notif">
                {Object.keys(shoppingCart).length}
              </div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
