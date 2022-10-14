import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { BsArrowLeft } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import { SearchResult } from "./";
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
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    console.log(e);
    if (!e.target.value) {
      setShowResults(false);
      return;
    }
    setShowResults(true);
    // controller call
    const response = await Axios.get(
      `/api/v1/products/search/${e.target.value}?limit=5`
    );

    const { products } = response.data;

    //set search results
    setSearchResults(products);
    console.log(products);
  };

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
              <FiMenu />
            </button>
            <div className="logo" onClick={() => navigate("/")}>
              <Logo />
            </div>
          </div>
          <div className={isMainPage ? "left-2" : "left-2 not-main"}>
            {!isMainPage && (
              <button className="back-arrow" onClick={() => navigate(-1)}>
                <BsArrowLeft />
              </button>
            )}
          </div>
        </div>
        <div className="middle">
          <div className="search-div btn-container">
            <input
              className="main-input"
              placeholder="Search for Product"
              onBlur={(e) => {
                if (
                  e.nativeEvent.explicitOriginalTarget &&
                  e.nativeEvent.explicitOriginalTarget ===
                    e.nativeEvent.originalTarget
                )
                  return;

                if (showResults) {
                  setTimeout(() => {
                    setShowResults(false);
                  }, 100);
                }
              }}
              onChange={(e) => searchHandler(e)}
            />
            <div
              className={showResults ? "dropdown show-dropdown" : "dropdown"}
            >
              {searchResults.map((result) => {
                return (
                  <SearchResult
                    key={result._id + "search"}
                    item={result}
                    className="dropdown-btn"
                  ></SearchResult>
                );
              })}
            </div>
          </div>

          <button className="search">
            <FaSearch />
          </button>
        </div>
        <div className="right">
          <div className="btn-container">
            <button
              className="navbar-button btn"
              onClick={() => setShowStatus(!showStatus)}
              onBlur={(e) => {
                if (
                  e.nativeEvent.explicitOriginalTarget &&
                  e.nativeEvent.explicitOriginalTarget ===
                    e.nativeEvent.originalTarget
                ) {
                  return;
                }
                if (showStatus) {
                  setTimeout(() => {
                    setShowStatus(false);
                  }, 100);
                }
              }}
            >
              <TiUser />
              {user ? `Hello, ${user.firstName}` : "not logged in"}
              <FaCaretDown />
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
              className="toggle-btn shopping-toggle"
              onClick={() => setShoppingCart(!showShoppingCart)}
            >
              <TiShoppingCart />
              <div className="shopping-cart-notif">
                <span>{Object.keys(shoppingCart).length}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
