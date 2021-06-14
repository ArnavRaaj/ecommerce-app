import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useCart } from "../context/Cart-Context";
import { useWish } from "../context/Wishlist-Context";

export function Navbar() {
    const { cartState } = useCart();
    const { wishState } = useWish();
    return (
        <nav className="navbar">
            <div className="navbar-left-component">
                <Link to="/" className="btn home-btn">
                    <span className="w-class">W </span>
                    <span className="wayfarlon">Wayfarlon</span>
                </Link>
                <Link className="product-nav-btn btn" to="/products">Products</Link>
            </div>

            <div className="navbar-right-component">

                <div className="badge-item">
                    <Link className="btn" to="/cart">
                        <FiShoppingCart className="nav-icons cart-icon" />
                    </Link>
                    <span className="notification-badge">
                        {cartState.itemsInCart.length}
                    </span>
                </div>

                <div className="badge-item">
                    <Link className="btn" to="/wishlist">
                        <BsHeart className="nav-icons wishlist-icon" />
                    </Link>
                    <span className="notification-badge">
                        {wishState.itemsInWishlist.length}
                    </span>
                </div>

                <Link className="btn" to="/user-details">
                    <FaRegUserCircle className="nav-icons user-icon" />
                </Link>

            </div>
        </nav>
    )

}