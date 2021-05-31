import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineMinus } from "react-icons/ai";
import { MdDelete, MdAdd } from "react-icons/md";
import { useCart } from "../../context/Cart-Context";

export function CartItem({ item }) {
    const { cartDispatch } = useCart()
    return (
        < >
            <div className="product-display-card" key={item.id}>
                <div className="product-details-remove-container">
                    <div className="product-details">
                        <img src={item.imageUrl} alt="" className="product-image" />
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">
                            < BiRupee /> {item.price}
                        </p>
                        <p className="product-rating">
                            {item.rating}/5 <AiFillStar />
                        </p>
                    </div>
                    <div className="remove-btn-container">
                        <button onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: item })} className="remove-btn btn">
                            < MdDelete />
                        </button>
                    </div>
                </div>

                <div className="product-action-btn">
                    Quan:
                    <button className="btn" onClick={() => cartDispatch({ type: "INCREASE_QUANTITY", payload: item })}>
                        <MdAdd className="icons add-icon" />
                    </button>
                    <span className="item-quantity">
                        {item.quantity}
                    </span>
                    <button className="btn" onClick={() => cartDispatch({ type: "DECREASE_QUANTITY", payload: item })}>
                        <AiOutlineMinus className="icons minus-icon" />
                    </button>
                </div>

            </div>
        </>
    )
}