import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/Cart-Context";
import { CartItem } from "./CartItem";
import { CartTotalPrice } from './CartTotalPrice';
import "../../css/style.css"

export function CartCard() {
    const { cartState, cartDispatch } = useCart();
    console.log(cartState.itemsInCart);
    return (
        <div>
            {cartState.itemsInCart.length === 0
                ?
                <div className="empty-cart-container">
                    <p className="empty-cart-msg">
                        Your Cart is empty
                    </p>
                    <Link to="/products" className="shop-router">
                        <button className="shop-router-btn">
                            Shop Now
                        </button>
                    </Link>
                </div>
                :
                <div className="cart-container">
                    <div className="clear-cart-container">
                        <button
                            onClick={() => cartDispatch({ type: "CLEAR_CART", payload: cartState.itemsInCart })} className="clear-cart-btn ">
                            Clear Cart
                        </button>
                        {cartState.itemsInCart.map((item) => (
                            <CartItem item={item} />
                        ))}
                    </div>
                    <div className="total-price-container">
                        <h2 className="order-summary">Order Summary</h2>
                        <div className="summary-content">
                            <p className="total-products">
                                Total Products (Inc GST)
                                <span className="total-amount">
                                    ₹ <CartTotalPrice />
                                </span>
                            </p>
                            <p className="shipping"> Shipping
                                <span className="free-shipping">FREE</span>
                            </p>
                        </div>
                        <div className="total-amount-container">
                            <h3> Total </h3>
                            <span className="total-amount">
                                ₹  <CartTotalPrice />
                            </span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}