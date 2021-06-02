import React from 'react'
import { useWish } from '../../context/Wishlist-Context'
import { WishItems } from "./WishItems";
import "../../css/style.css";

export function Wishlist() {
    const { wishState, wishDispatch } = useWish();
    return (
        <div>
            {wishState.itemsInWishlist.length === 0
                ?
                <p className="empty-wishlist-msg">
                    Your wishlist is empty. Please add some Products.
                </p>
                :
                <div className="wishlist-container">
                    <button
                        onClick={() => wishDispatch({ type: "CLEAR_WISHLIST", payload: wishState.itemsInWishlist })}
                        className="clear-wishlist-btn ">
                        Clear Wishlist
                    </button>
                    {wishState.itemsInWishlist.map((item) => (
                        < WishItems item={item} />
                    ))}
                </div>
            }
        </div>
    )
}
