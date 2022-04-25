import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";

import {
  FrontPage,
  Category,
  Product,
  Checkout,
  Profile,
  SharedLayout,
} from "./pages/store";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<FrontPage />} />
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="search/:category" element={<Category />}></Route>
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
    </BrowserRouter>
  );
}

export default App;
