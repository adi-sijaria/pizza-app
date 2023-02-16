import React from 'react'
import { useContext, createContext } from 'react'
import { ProductContext } from '../../Context/product.context'
import "./dropdown.scss"

const Dropdown = () => {
  const {Filterthroughveg,pizzamenu}=useContext(ProductContext);
  




  return (

    <div className='dropdown'>
      <select name="cars" className='dropdowntag' id="cars" onChange={Filterthroughveg}>
      <option value="all">All</option>
        <option value="true">veg</option>
        <option value="false">non veg</option>
       
       
      </select>

    </div>
  )
}

export default Dropdown
