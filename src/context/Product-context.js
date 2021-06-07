import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext();

function productReducer(state, action) {
    switch (action.type) {
        case "HIGH_TO_LOW":
            return {
                ...state, sortItemBy: action.payload,
            };

        case "LOW_TO_HIGH":
            return {
                ...state, sortItemBy: action.payload,
            }

        case "ALL_ITEMS":
            return {
                ...state, sortItemBy: action.payload,
            }

        case "RATING":
            return {
                ...state, sortItemBy: action.payload,
            }

        case "TOGGLE_STOCK":
            return {
                ...state, sortStockBy: action.payload === true ? "inStock" : "allStock"
            }

        case "TOGGLE_DELIVERY":
            return {
                ...state, sortDeliveryBy: action.payload === true ? "deliverFast" : "allDeliveries"
            }

        case "PRICE_RANGE":
            return {
                ...state, priceRange: action.payload
            }

        default:
            return state;
    }
}

const initialState = {
    sortItemBy: "allItems",
    sortStockBy: "allStock",
    sortDeliveryBy: "allDeliveries",
    priceRange: "12999"
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
        if (e.target.value === "allItems") {
            dispatch({ type: "ALL_ITEMS", payload: e.target.value })
        }
        if (e.target.value === "rating") {
            dispatch({ type: "RATING", payload: e.target.value })
        }
    };

    const sortByStock = (e) => {
        if (e.target.checked === "allStock") {
            dispatch({ type: "TOGGLE_STOCK", payload: e.target.checked })
        } dispatch({ type: "TOGGLE_STOCK", payload: e.target.checked })
    }

    const sortByDelivery = (e) => {
        if (e.target.checked === "allDeliveries") {
            dispatch({ type: "TOGGLE_DELIVERY", payload: e.target.checked })
        } dispatch({ type: "TOGGLE_DELIVERY", payload: e.target.checked })
    }

    const sortByPriceRange = (e) => {
        dispatch({ type: "PRICE_RANGE", payload: e.target.value })
    }

    return (
        <ProductContext.Provider value={{ ...state, sortByPrice, sortByStock, sortByDelivery, sortByPriceRange, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext)
}