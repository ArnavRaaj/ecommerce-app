import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

export function CartItem({ item }) {
    return (
        <div className="product-display-card" key={item.id}>
            <div className="image-wishBtn-container">
                <img src={item.imageUrl} alt="" className="product-image" />
            </div>
            <h2 className="product-name">{item.name}</h2>
            <p className="product-price">
                <span className="price-span">
                    < BiRupee /> {item.price}
                </span>
            </p>
            <p className="product-rating">
                {item.rating}/5 <AiFillStar />
            </p>
        </div>
    )
}