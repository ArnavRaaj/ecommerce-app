import React from 'react'
import { useCart } from "../../context/Cart-Context";

export const CartTotalPrice = () => {
    const { cartState } = useCart();
    return (
        <div>
            {cartState.itemsInCart.reduce(
                (amount, item) => amount + item.price * item.quantity, 0
            )}
        </div>
    )
}
