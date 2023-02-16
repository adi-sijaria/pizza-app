import React from 'react'
import "./Checkout.scss"
import { useContext } from 'react'
import { CartContext } from '../../Context/cartcontext.context'
import CheckoutBox from '../../Components/Checkout.component/checkout-box'
import CartIcon from '../../Components/cart-icon.component/CartIcon'
const Checkout = () => {
  const { cartItems, RemoveFromCart, addItemTocart, SubtractFromCart, CartTotal } = useContext(CartContext);
  const { name, price, quantity, img } = cartItems;
  return (

    <>
      <div>
        <div className='holder'>
          {cartItems.map((cartItem) => {
            const { name, price, quantity, img } = cartItem;
            return (
              <>
                <CheckoutBox cartItem={cartItem} key={cartItem.id} />


              </>
            )
            
            
            
          })}
          <h1 className='carttotal'>CartTotal:{CartTotal}$</h1>
        </div>
        
      </div>

    </>








  )
}

export default Checkout
