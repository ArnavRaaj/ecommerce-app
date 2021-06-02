import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import "../../css/style.css";
import { useWish } from "../../context/Wishlist-Context";
import { MdDelete } from "react-icons/md";

export function WishItems({ item }) {
    const { wishDispatch } = useWish();
    return (
        <div className="wishlist-display-container" key={item.id}>
            <div className="cart-item-details">
                <img src={item.imageUrl} alt="" className="wishlist-product-image" />
                <h3 className="cart-product-name">{item.name}</h3>
                <span className="cart-price-span">
                    < BiRupee className="icons rupee-icon" />{item.price}
                </span>
                <p className="cart-rating-span">
                    {item.rating}/5 <AiFillStar className="icons rating-icon" />
                </p>
            </div>
            <div className="remove-btn-container">
                <button
                    onClick={() => wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })}
                    className="remove-btn cart-btn"
                >
                    < MdDelete />
                </button>
            </div>
        </div>
    )
}