import React from 'react'
import { useCart } from "../context/Cart-Context"
import { CartItem } from "./CartItem";

export function Cart() {
    const { itemsInCart } = useCart();
    return (
        <div>
            <ul>
                {itemsInCart.map((item) => (
                    <CartItem item={item} />
                ))}
            </ul>
        </div>
    )
}
