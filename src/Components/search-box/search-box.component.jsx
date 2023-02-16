import {Component} from 'react';
import './search-box.styles.css';
import { useContext,useState } from 'react';

import { ProductContext } from '../../Context/product.context';
const SearchBox=()=>{
    const {Filterthroughsearch}=useContext(ProductContext);
        return (
            <input 
            className={`search-box `}
            placeholder='search Pizza' 
            type='search' 
            onChange={Filterthroughsearch} 
        />
            
        )
    
}
export default SearchBox;