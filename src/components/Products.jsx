import React from 'react'
import { productList } from "./ProductList";
import { BiRupee } from "react-icons/bi";

export function Products() {
    return (
        <>
            <h1>This is Products</h1>
            <div className="product-side-bar">
                this will contain sorting and filter
            </div>
            <div className="product-listing-container">
                {productList.map(({ id, imageUrl, name, price, mrp, rating }) => (
                    <div className="product-display-card" key={id}>
                        <div className="image-wishBtn-container">
                            <img src={imageUrl} alt="" />
                        </div>
                        <h3 className="product-name">{name}</h3>
                        <p className="product-price">< BiRupee /> {price} <span style={{ textDecoration: "line-through" }}> {mrp}</span></p>
                        <p className="product-rating"> {rating}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
