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
      <div className="navbar-left-component">
        <button onClick={() => setRoute("home")}>Logo</button>
        <button onClick={() => setRoute("products")}>Products</button>
      </div>
      <div className="navbar-right-component">
        <button onClick={() => setRoute("cart")}>Cart</button>
        <button onClick={() => setRoute("wishlist")}>Wishlist</button>
      </div>
      {route === "home" && <Home />}
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}

    </div>
  );
}

export default App;
