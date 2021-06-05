import { createContext, useReducer, useContext } from "react";
import { productList } from "../components/products/ProductList";

const ProductContext = createContext();

function productReducer(state, action) {
    switch (action.type) {
        case "HIGH_TO_LOW":
            return {
                ...state, priceSort: action.payload,
            };

        case "LOW_TO_HIGH":
            return {
                ...state, priceSort: action.payload,
            }
        default:
            return state;
    }
}

const initialState = {
    priceSort: "lowToHigh"
}

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)

    const sortByPrice = (e) => {
        if (e.target.value === "highToLow") {
            dispatch({ type: "HIGH_TO_LOW", payload: e.target.value })
        }
        if (e.target.value === "lowToHigh") {
            dispatch({ type: "LOW_TO_HIGH", payload: e.target.value })
        }
    };
    return (
        <ProductContext.Provider value={{ ...state, sortByPrice, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext)
}