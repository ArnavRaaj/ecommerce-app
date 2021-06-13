import "../src/css/style.css";
// import {Link} from "react-router-dom";
import { useState } from "react";
import { Home } from "./components/Home";
import { Products } from "./components/products/Products";
import { Cart } from "./components/cart/Cart";
import { Wishlist } from "./components/wishlist/Wishlist";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useCart } from "./context/Cart-Context";
import { useWish } from "./context/Wishlist-Context";

function App() {
  const [route, setRoute] = useState("home");
  const { cartState } = useCart();
  const { wishState } = useWish();
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left-component">
          <button className="btn home-btn" onClick={() => setRoute("home")}>
            <span className="w-class">W </span>
            <span className="wayfarlon">Wayfarlon</span>
          </button>
          <button className="product-nav-btn" onClick={() => setRoute("products")}>Products</button>
        </div>

        <div className="navbar-right-component">

          <div className="badge-item">
            <button className="btn" onClick={() => setRoute("cart")}>
              <FiShoppingCart className="nav-icons cart-icon" />
            </button>
            <span className="notification-badge">
              {cartState.itemsInCart.length}
            </span>
          </div>

          <div className="badge-item">
            <button className="btn" onClick={() => setRoute("wishlist")}>
              <BsHeart className="nav-icons wishlist-icon" />
            </button>
            <span className="notification-badge">
              {wishState.itemsInWishlist.length}
            </span>
          </div>

          <button className="btn" onClick={() => setRoute("wishlist")}>
            <FaRegUserCircle className="nav-icons wishlist-icon" />
          </button>

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
