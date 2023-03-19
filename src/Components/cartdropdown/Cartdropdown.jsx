import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartcontext.context'
import { CartItem } from '../cart-item/Cart-item'
import Button from '../button-component/button.component'
import { useNavigate } from 'react-router-dom'
import "./Cartdropdown.scss"
import GoogleButton from 'react-google-button'
import { ToogleContext } from '../../Context/tooglemode.context'
const Cartdropdown = () => {
    const {cartItems}=useContext(CartContext);
    console.log(cartItems)
    const {darkmode,SetDarkMode}=useContext(ToogleContext)
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>{
      navigate('./checkout')
    }
    

  return (

    <div className='cart-dropdown-container' style={{backgroundColor:darkmode?"purple":"white"}}>
      <div className='cart-items'>
        {cartItems.map((cartitem)=>(<CartItem key={cartitem.id} cartItem={cartitem}/>))}
        </div>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
      
    </div>
  )
}

export default Cartdropdown
