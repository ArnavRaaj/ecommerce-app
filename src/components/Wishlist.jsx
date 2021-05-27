import React from 'react'
import { useWish } from '../context/Wishlist-Context'
import { WishItems } from "./WishItems";

export function Wishlist() {
    const { wish } = useWish();
    return (
        <div>
            {wish.length === 0 ?
                <p className="empty-wishlist-msg">Your wishlist is empty. Please add some Products.</p> :
                wish.map((item) => (
                    < WishItems item={item} />
                ))}
        </div>
    )
}
