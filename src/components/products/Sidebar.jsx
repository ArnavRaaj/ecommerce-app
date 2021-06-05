import React from 'react'
import { BsArrowLeftRight, BsFilterLeft } from "react-icons/bs";
import { useProduct } from '../../context/Product-context';

const filterByPrice = (productList, priceSort) => {
    if (priceSort === "highToLow") {
        return productList.sort((a, b) => b.price - a.price);
    }
    else if (priceSort === "lowToHigh") {
        return productList.sort((a, b) => a.price - b.price);
    }
    else {
        return productList;
    }
}


function Sidebar() {
    const { sortByPrice, priceSort } = useProduct();
    console.log({ priceSort })

    // console.log(filteredData);

    return (
        <div className="sidebar-container">
            <h3 className="sidebar-header">
                FILTERS <BsFilterLeft />
            </h3>
            <div className="dropdown-sort">
                <label htmlFor="" className="price-sort-label">
                    <BsArrowLeftRight className="sort-icon" />SORT BY
                </label>
                <select
                    className="sort-price"
                    name="productFilter"
                    id="sortproducts"
                    value={priceSort}
                    onChange={(e) => sortByPrice(e)}
                >
                    <option value="allteams">Most Relevent</option>
                    <option value="highToLow">Price - High to low</option>
                    <option value="lowToHigh">Price - Low to high</option>
                </select>
            </div>
        </div>
    )
}


export { Sidebar, filterByPrice };