import React from 'react'
import "../css/product.css";
import { productList } from "./ProductList";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useCart } from '../context/Cart-Context';
import { useWish } from '../context/Wishlist-Context';
import { BsHeart } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"

export function Products() {
    const { cartDispatch } = useCart();
    const { wishDispatch } = useWish()
    return (
        <div className="product-container">
            <div className="product-side-bar">
                this will contain sorting and filter
            </div>
            <div className="product-listing-container">
                {productList.map((item) => (
                    <div className="product-display-card" key={item.id}>
                        <img src={item.imageUrl} alt="" className="product-image" />
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-price">
                            <span className="price-span">
                                < BiRupee className="icons rupee-icon" />{item.price}
                            </span>

                            <span className="mrp-span">
                                MRP< BiRupee className="icons rupee-icon" />{item.mrp}
                            </span>
                        </p>
                        <p className="product-rating">
                            {item.rating}/5 <AiFillStar className="icons rating-icon" />
                        </p>
                        <div className="btn-container">
                            <button
                                className="addToCart-btn product-btn"
                                onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}>
                                Add to Cart <FiShoppingCart className="addTo-Cart-wish-icon" />
                            </button>
                            <button
                                className="addToWish-btn product-btn"
                                onClick={() => wishDispatch({ type: "ADD_TO_WISHLIST", payload: item })}>
                                Add to Wishlist <BsHeart className="addTo-Cart-wish-icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
