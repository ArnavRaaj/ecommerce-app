import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(cartState, action) {
    console.log(action.payload);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...cartState, itemsInCart: [...cartState.itemsInCart, { ...action.payload, quantity: 1 }]
            };

        case "INCREASE_QUANTITY":
            return {
                ...cartState, itemsInCart: cartState.itemsInCart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            }

        case "DECREASE_QUANTITY":
            return {
                ...cartState, itemsInCart: cartState.itemsInCart.map((item) =>
                    item.id === action.payload.id ?
                        item.quantity > 1 ?
                        { ...item, quantity: item.quantity - 1 }
                        : item
                        : item)
            }

        case "REMOVE_FROM_CART":
            return {
                ...cartState, itemsInCart: cartState.itemsInCart.filter((item) => item.id !== action.payload.id)
            };

        case "CLEAR_CART":
            return {
                ...cartState, itemsInCart : []
            };

        default:
            return cartState;
    }

}

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, { itemsInCart: [] });
    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
};