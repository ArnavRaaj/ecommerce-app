import { useState } from "react";
import "../src/css/style.css";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/cart/Cart";
import { Wishlist } from "./components/Wishlist";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { useCart } from "./context/Cart-Context";

function App() {
  const [route, setRoute] = useState("products");
  const {cartState} = useCart()
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
              0
            </span>
          </div>

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
