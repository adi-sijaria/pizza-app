import React from 'react'
import Signin from '../Sign-in/Sign-in'
import Signup from '../sign-up/sign-up'
import "./Authentication.css"
const Authentication = () => {
  return (
    <div className='authentication-container'>
        <Signin className="signin"/>
        {/* <Signup className="signup"/> */}
        
      
    </div>
  )
}

export default Authentication
