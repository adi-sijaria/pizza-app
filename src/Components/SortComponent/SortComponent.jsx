import React from 'react'
import "./SortComponent.scss"
import { useContext } from 'react'
import { ProductContext } from '../../Context/product.context'
export default function SortComponent() {
    const { Filterthroughprice } = useContext(ProductContext);
    return (
        <div className='sort-component'>
            <select className='dropdowntag' onChange={Filterthroughprice} id="cars" >
                <option value="none" >All</option>
                <option value="increasing">increasing</option>
                <option value="decreasing">decreasing</option>


            </select>

        </div>
    )
}
