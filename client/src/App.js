import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";

import {
  FrontPage,
  Category,
  Product,
  Checkout,
  Profile,
  Search,
  SharedLayout,
} from "./pages/store";

import ScrollToTop from "./utils/ScrollToTop";
import CheckMainPage from "./utils/CheckMainPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <CheckMainPage>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<FrontPage />} />
              <Route path="product/:id" element={<Product />}></Route>
              <Route path="category/:category" element={<Category />}></Route>
              <Route path="search/:query" element={<Search />}></Route>
              <Route path="checkout" element={<Checkout />}></Route>
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              ></Route>
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Register />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CheckMainPage>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
