import React from 'react'
import { Link } from 'react-router-dom'
export function Home() {
    return (
        <div className="home-container">
            <div className="inner-home-container">
                <h1 className="home-header">Welcome to <span className="wayfarlon">Wayfarlon</span></h1>
                <p className="home-desc">
                    Wayfarlon is your one stop shop for buying trekking and hiking goods online in India. We are open for all to buy adventurous sports products at an extremely affordable price.
                </p>

                <Link to="/products">
                    <button className="shop-router-btn">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    )
}
