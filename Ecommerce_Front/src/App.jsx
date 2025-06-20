import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  const user = true;
   return (
     <Router>
       <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={user ? <Navigate to= "/" /> : <Login/>} />
          <Route path="/register" element={user ? <Navigate to = "/" /> : <Register/>} />
        </Routes>
     </Router>
   )
};

export default App;