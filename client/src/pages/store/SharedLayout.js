import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  ShoppingCart,
  Footer,
} from "../../components";
import { lightTheme, darkTheme } from "../../components/Themes";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const SharedLayout = () => {
  const { isLightMode } = useAppContext(true);
  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Wrapper>
        <div className="container">
          <BigSidebar />
          <div className="main-content">
            <Navbar />
            <div>
              <div className="middle-content">
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
          <ShoppingCart />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};
export default SharedLayout;
