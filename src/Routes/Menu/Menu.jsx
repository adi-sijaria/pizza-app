import React from 'react'
import { useState, useContext } from "react";
import "./Menu.css"
import Dropdown from '../../Components/dropdown-veg/dropdown';
import SortComponent from '../../Components/SortComponent/SortComponent';
import { useEffect } from 'react';

import PIZZAMENU from '../../pizza-data.json';
import { ProductContext } from "../../Context/product.context";
import Productcard from '../../Components/product-card/Product.card';
import SearchBox from '../../Components/search-box/search-box.component';
import { ToogleContext } from '../../Context/tooglemode.context';

const Menu = () => {
  const { pizzamenu, Filterthroughveg, vegnonvegCart ,Filterthroughsearch,Searchcart} = useContext(ProductContext);
  const {darkmode,SetDarkMode}=useContext(ToogleContext)
  const [finalCart,setFinalCart]=useState([]);
  console.log(pizzamenu);
  console.log(vegnonvegCart);
  return (
    <>
      <div className='menu-div'>
        <div className='component-container' style={{backgroundColor:darkmode?"#150050":"white"}}>
          {/* <span><Dropdown /></span> */}
          <span className='searchbox'><SearchBox/></span>
          {/* <span className='searchbox'><SortComponent/></span> */}
          
        </div>
        <div className='pizza-menu-container'>

          {/* {Searchcart.map((pizzadetail) => (
            <Productcard pizzamenu={pizzadetail} />
          ))} */}
          {Searchcart.map((pizzadetail) => (
            <Productcard pizzamenu={pizzadetail} />
          ))} 
        </div>
      </div>
    </>
  )
}

export default Menu
//
