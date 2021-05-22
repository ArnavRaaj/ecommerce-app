import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const productList = [
    {
        id :uuidv4(),
        name: "cloth"
    }
]

export function Products() {
    return (
        <div>
            <h1>This is Products</h1>
        </div>
    )
}
