import React from 'react'
import { productList } from "./ProductList";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useCart } from '../context/Cart-Context';

export function Products() {
    const { itemsInCart, setItemsInCart } = useCart();
    return (
        <div className="product-container">
            <div className="product-side-bar">
                this will contain sorting and filter
            </div>
            <div className="product-listing-container">
                {productList.map((item) => (
                    <div className="product-display-card" key={item.id}>
                        <div className="image-wishBtn-container">
                            <img src={item.imageUrl} alt="" className="product-image" />
                        </div>
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">
                            <span className="price-span">
                                < BiRupee /> {item.price}
                            </span>
                            <span style={{ textDecoration: "line-through" }}>
                                {item.mrp}
                            </span></p>
                        <p className="product-rating">
                            {item.rating}/5 <AiFillStar />
                        </p>
                        {itemsInCart.id === item.id ? <p>go to cart</p> :
                            <button
                                onClick={() =>
                                    setItemsInCart((currentItems) => [...currentItems, item])
                                }
                            >
                                Add to Cart
                        </button>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
