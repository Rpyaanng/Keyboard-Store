import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { Landing, Register, Error, ProtectedRoute, AdminRoute } from "./pages";

import {
  FrontPage,
  Category,
  Product,
  Checkout,
  Profile,
  SharedLayout,
} from "./pages/store";
import { Dashboard, CreateProduct } from "./pages/admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <SharedLayout />
              </AdminRoute>
            </ProtectedRoute>
          }
        >
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
          <Route path="admin/dashboard" element={<Dashboard />}></Route>
          <Route
            path="admin/create-product"
            element={<CreateProduct />}
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
