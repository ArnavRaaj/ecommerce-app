import "../src/css/style.css";
import {  Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/products/Products";
import { Cart } from "./components/cart/Cart";
import { Wishlist } from "./components/wishlist/Wishlist";
import { User } from "./components/User";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/user-details" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
