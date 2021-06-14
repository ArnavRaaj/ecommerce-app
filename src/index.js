import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/Cart-Context';
import { ProductProvider } from './context/Product-context';
import { WishProvider } from './context/Wishlist-Context';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <WishProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
