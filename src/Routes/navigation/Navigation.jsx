import React from 'react'
import "./Navigation.css"
import CartIcon from '../../Components/cart-icon.component/CartIcon'
import { Link, Outlet } from 'react-router-dom'
import { useContext,useState } from 'react'
import { CartContext } from '../../Context/cartcontext.context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Cartdropdown from '../../Components/cartdropdown/Cartdropdown'
import { ToogleContext } from '../../Context/tooglemode.context'
// import Cartdropdown from '../../Components/cartdropdown/Cartdropdown'
const Navigation = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    const {darkmode,SetDarkMode}=useContext(ToogleContext)
    const [mode,Setmode]=useState('light')
    // console.log(darkmode);
  return (
    <>
        <div className='navbar' style={{backgroundColor:darkmode?"#000000": "rgb(42, 41, 43)",color:darkmode?"white":'white'}}>
            <div className='logo'><button onClick={()=>SetDarkMode(!darkmode)}>{mode}</button></div>
            <ul className='nav-links'>
                <Link to='/' className='home'style={{
                    color:darkmode?"white":'white'}}>
                    <li>
                        Home
                    </li>
                </Link>
                 <Link to='/menu' className='menu'style={{
                    color:darkmode?"white":'white'}}>
                    <li>
                        Menu
                    </li>
                </Link>
                 <Link to='/auth' className='auth' style={{
                    color:darkmode?"white":'white'}}>
                    <li>
                        Signin
                    </li>
                </Link>   
                <CartIcon 
                />
                
            </ul>
            {/* <CartItem/> */}

        {isCartOpen && <Cartdropdown/>}
        </div>
        <Outlet/>
        
        </>

  )
}

export default Navigation
