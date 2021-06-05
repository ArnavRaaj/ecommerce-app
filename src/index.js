import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/Cart-Context';
import { ProductProvider } from './context/Product-context';
import { WishProvider } from './context/Wishlist-Context';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WishProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
