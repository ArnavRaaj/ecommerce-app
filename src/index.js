import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/Cart-Context';
import { WishProvider } from './context/Wishlist-Context';

ReactDOM.render(
  <React.StrictMode>
    <WishProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
