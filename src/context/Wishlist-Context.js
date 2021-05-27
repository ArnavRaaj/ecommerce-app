import { createContext, useContext, useState } from "react";

export const WishContext = createContext();

export const WishProvider = ({ children }) => {
    const [wish, setWishlist] = useState([]);
    return (
        <WishContext.Provider value={{ wish, setWishlist }}>
            {children}
        </WishContext.Provider>
    )
}

export const useWish = () => {
    return useContext(WishContext);
};