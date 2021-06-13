import React from 'react'
import { BsArrowLeftRight, BsFilterLeft } from "react-icons/bs";
import { useProduct } from '../../context/Product-context';

const filterByPrice = (productList, sortItemBy) => {
    if (sortItemBy === "highToLow") {
        return productList.sort((a, b) => b.price - a.price);
    }
    else if (sortItemBy === "lowToHigh") {
        return productList.sort((a, b) => a.price - b.price);
    }
    else if (sortItemBy === "rating") {
        return productList.sort((a, b) => b.rating - a.rating);
    }
    return productList;
}

const filterByStock = (productList, sortStockBy) => {
    if (sortStockBy === "inStock") {
        return productList.filter((item) => item.inStock === true);
    }
    return productList;
};

const filterByDelivery = (productList, sortDeliveryBy) => {
    if (sortDeliveryBy === "deliverFast") {
        return productList.filter((item) => item.fastDelivery === true);
    }
    return productList;
}

const filterByPriceRange = (productList, priceRange) => {
    return (productList.filter((item) => item.price <= priceRange));
}

function Sidebar() {
    const { sortByPrice, sortItemBy, sortByStock, sortStockBy, sortByDelivery, sortDeliveryBy, priceRange, sortByPriceRange } = useProduct();
    // console.log({ sortItemBy })

    return (
        <div className="sidebar-container">
            <h3 className="sidebar-header">
                FILTERS <BsFilterLeft />
            </h3>
            <div className="dropdown-sort filter">
                <label htmlFor="filtering-price" className="price-sort-label">
                    <BsArrowLeftRight className="sort-icon" />SORT BY
                </label>
                <select
                    className="sort-price"
                    name="productFilter"
                    id="sortproducts"
                    value={sortItemBy}
                    onChange={(e) => sortByPrice(e)}
                >
                    <option value="allItems">Most Relevent</option>
                    <option value="highToLow">Price - High to low</option>
                    <option value="lowToHigh">Price - Low to high</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="toggle-stock-container filter">

                <input
                    type="checkbox"
                    name="stock-filter"
                    id="stock-filter"
                    value={sortStockBy}
                    onChange={(e) => sortByStock(e)}
                /><label htmlFor="filtering-stock">
                    Items in stock only
                </label>
            </div>

            <div className="toggle-delivery-container filter">
                <input
                    type="checkbox"
                    name="delivery-filter"
                    id="delivery-filter"
                    value={sortDeliveryBy}
                    onChange={(e) => sortByDelivery(e)}
                />
                <label htmlFor="filtering-delivery">
                    Fast Delivery
                </label>
            </div>

            <div className="slider-price-container filter">
                <label htmlFor="price-slider" className="price-slider">
                    Price
                 </label>
                <input
                    type="range"
                    min="99"
                    max="12999"
                    name="slider"
                    id="slider"
                    className="price-slider"
                    value={priceRange}
                    onChange={(e) => sortByPriceRange(e)}
                />
                <p className="price-slider"> <span className="cart-btn price-slider-span-1">99</span> To <span className="cart-btn price-slider-span-2">12999</span></p>
            </div>
        </div>
    )
}

export { Sidebar, filterByPrice, filterByStock, filterByDelivery, filterByPriceRange };