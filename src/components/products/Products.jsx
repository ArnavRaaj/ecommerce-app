import React from 'react'
import "../../css/product.css";
import { productList } from "./ProductList";
import { Sidebar } from './Sidebar';
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { FaOpencart } from "react-icons/fa"
import { useCart } from '../../context/Cart-Context';
import { useWish } from '../../context/Wishlist-Context';
import { useProduct } from '../../context/Product-context';
import { filterByPrice, filterByStock, filterByDelivery, filterByPriceRange } from "./Sidebar";

export function Products() {
    const { cartDispatch } = useCart();
    const { wishDispatch } = useWish();
    const { sortItemBy, sortStockBy, sortDeliveryBy, priceRange } = useProduct();
    const filteredData = filterByPriceRange(filterByDelivery(filterByStock(filterByPrice(productList, sortItemBy), sortStockBy), sortDeliveryBy), priceRange);
    // console.log(priceRange, "price --- range");
    // console.log(" filtered data.....",filteredData);
    return (
        <div className="product-container">
            <div className="product-side-bar">
                <Sidebar />
            </div>
            <div className="product-listing-container">
                {filteredData.map((item) => (
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
                        <div className="rating-delivery-conatiner">
                            <p className="product-rating">
                                {item.rating}/5 <AiFillStar className="icons rating-icon" />
                            </p>
                            {item.fastDelivery &&
                                <p className="fastdelivery">
                                    <FaOpencart className="delivery-icon" /> fast Delivery
                                </p>
                            }

                        </div>
                        <div className="btn-container">
                            {item.inStock &&
                                <button
                                    className="addToCart-btn product-btn"
                                    onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}>
                                    Add to Cart <FiShoppingCart className="addTo-Cart-wish-icon" />
                                </button>
                            }
                            {
                                !item.inStock &&
                                <button
                                    className="OutOfStock-btn product-btn"
                                    onClick={() => alert("Out of stock")}>
                                    Out of Stock
                                </button>
                            }

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
