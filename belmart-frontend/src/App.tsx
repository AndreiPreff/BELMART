import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpComponent from "./components/signup/SignUpComponent";
import LoginComponent from "./components/login/LoginComponent";
import ProductsComponent from "./components/products/ProductsComponent";
import OrdersComponent from "./components/orders/OrdersComponent";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/orders" element={<OrdersComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
