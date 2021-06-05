import { createContext, useContext, useReducer } from "react";

export const WishContext = createContext();

function wishReducer(wishState, action) {
    console.log(action.payload);
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...wishState,
                itemsInWishlist: [...wishState.itemsInWishlist, { ...action.payload }]
            }

        case "REMOVE_FROM_WISHLIST":
            return {
                ...wishState, itemsInWishlist: wishState.itemsInWishlist.filter((item) => item.id !== action.payload.id)
            };

        case "CLEAR_WISHLIST":
            return {
                ...wishState, itemsInWishlist: []
            };
                   
        default:
            return wishState;
    }
}

export const WishProvider = ({ children }) => {
    const [wishState, wishDispatch] = useReducer(wishReducer, { itemsInWishlist: [] });
    return (
        <WishContext.Provider value={{ wishState, wishDispatch }}>
            {children}
        </WishContext.Provider>
    )
}

export const useWish = () => {
    return useContext(WishContext);
};