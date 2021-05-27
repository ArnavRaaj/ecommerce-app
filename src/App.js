import { useState } from "react";
import "./style.css";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left-component">
          <button className="btn home-btn" onClick={() => setRoute("home")}>
            <span className="w-class">W </span>
            <span className="wayfarlon">Wayfarlon</span>
          </button>
          <button className="btn product-btn" onClick={() => setRoute("products")}>Products</button>
        </div>
        <div className="navbar-right-component">
          <button className="btn" onClick={() => setRoute("cart")}><FiShoppingCart className="nav-icons cart-icon" /></button>
          <button className="btn" onClick={() => setRoute("wishlist")}><BsHeart className="nav-icons wishlist-icon" /></button>
        </div>
      </nav>

      {route === "home" && <Home />}
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}

    </div>
  );
}

export default App;
