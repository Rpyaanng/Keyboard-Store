import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  ShoppingCart,
  Footer,
} from "../../components";
import { GlobalStyle } from "../../components/GlobalStyle";
import { lightTheme, darkTheme } from "../../components/Themes";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const SharedLayout = () => {
  const { isLightMode } = useAppContext();
  return (
    <Wrapper>
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
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
      </ThemeProvider>
    </Wrapper>
  );
};
export default SharedLayout;
