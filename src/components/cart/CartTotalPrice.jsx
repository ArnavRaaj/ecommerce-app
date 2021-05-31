import React from 'react'
import { useCart } from "../../context/Cart-Context";

export const CartTotalPrice = () => {
    const { cartState, cartDispatch } = useCart();
    return (
        <div>
            {cartState.itemsInCart.reduce(
                (amount, item) => amount + item.price * item.quantity, 0
            )}

            {/* <h2>Order Summary</h2>
            <div className="summary-content">
                <p className="total-products">
                    Total Products (Inc GST)
                    <span className="total-product-amount">

                    </span>
                </p>
                <p>
                    Shipping
                    <span className="free-shipping">FREE</span>
                </p>
            </div>
            <div className="total-amount-container">
                <h3> Total </h3>
                <span className="total-amount">
                    {cartState.itemsInCart.reduce(
                        (amount, item) => amount + item.price * item.quantity, 0
                    )}
                </span>
            </div> */}
        </div>
    )
}
