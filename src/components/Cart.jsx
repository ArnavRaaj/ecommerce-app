import React from 'react'
import { useCart } from "../context/Cart-Context"
import { CartItem } from "./CartItem";

export function Cart() {
    const { itemsInCart } = useCart();
    return (
        <div>
            {itemsInCart.length === 0 ?
                <p className="empty-cart-msg">Your Cart is empty. Please add to some Products</p> :
                itemsInCart.map((item) => (
                    <CartItem item={item} />
                ))}
        </div>
    )
}
