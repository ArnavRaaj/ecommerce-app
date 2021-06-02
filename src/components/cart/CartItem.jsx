import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineMinus } from "react-icons/ai";
import { MdDelete, MdAdd } from "react-icons/md";
import { useCart } from "../../context/Cart-Context";
import "../../css/style.css"

export function CartItem({ item }) {
    const { cartDispatch } = useCart()
    return (
        < >
            <div className="cart-item-display-container" key={item.id}>
                <div className="cart-item-remove-container">
                    <div className="cart-item-details">
                        <img src={item.imageUrl} alt="" className="product-image" />
                        <h3 className="cart-product-name">{item.name}</h3>
                        <span className="cart-price-span">
                            < BiRupee className="icons rupee-icon" />{item.price}
                        </span>
                        <p className="cart-rating-span">
                            {item.rating}/5 <AiFillStar className="icons rating-icon" />
                        </p>
                    </div>
                    <div className="remove-btn-container">
                        <button onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: item })} className="remove-btn cart-btn">
                            < MdDelete />
                        </button>
                    </div>
                </div>

                <div className="cart-action-btn">
                    Qty
                    <button className="cart-btn" onClick={() => cartDispatch({ type: "DECREASE_QUANTITY", payload: item })}>
                        <AiOutlineMinus className="icons minus-icon" />
                    </button>
                    <span className="item-quantity">
                        {item.quantity}
                    </span>
                    <button className="cart-btn" onClick={() => cartDispatch({ type: "INCREASE_QUANTITY", payload: item })}>
                        <MdAdd className="icons add-icon" />
                    </button>
                </div>

            </div>
        </>
    )
}