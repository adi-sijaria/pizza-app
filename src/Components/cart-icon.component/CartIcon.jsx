import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";
import { useContext } from 'react';
import { CartContext } from '../../Context/cartcontext.context';

const CartIcon = () => {
    const {cartItems,isCartOpen,setIsCartOpen}=useContext(CartContext);
    let quantity=0;
    cartItems.map((cartitem)=>quantity=quantity+cartitem.quantity);
    const tooglemode=()=>setIsCartOpen(!isCartOpen);
  return (
    
    


    <div>
        <div className='cart-icon-container' onClick={tooglemode}>
            <ShoppingIcon className='shopping-icon'/>
        
            <div className='item-count'>{quantity}</div>
        </div>
        
      
    </div>
  )
}

export default CartIcon
