import { useState } from "react";
import "./style.css";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left-component">
          <button className="btn" onClick={() => setRoute("home")}>Logo</button>
          <button className="btn" onClick={() => setRoute("products")}>Products</button>
        </div>
        <div className="navbar-right-component">
          <button className="btn" onClick={() => setRoute("cart")}>Cart</button>
          <button className="btn" onClick={() => setRoute("wishlist")}>Wishlist</button>
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
