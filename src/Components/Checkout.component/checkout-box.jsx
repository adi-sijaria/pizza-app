import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartcontext.context'
import "./checkout-box.styles.scss"

const CheckoutBox = ({ cartItem }) => {
  const { RemoveFromCart, addItemTocart, SubtractFromCart } = useContext(CartContext);
  const { name, price, quantity, img } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={img} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => SubtractFromCart(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemTocart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}$</span>
      <div className='remove-button' onClick={() => RemoveFromCart(cartItem)}>&#10005;</div>
    </div>

  )
}

export default CheckoutBox
