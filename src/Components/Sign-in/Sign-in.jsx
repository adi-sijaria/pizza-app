import React from 'react'
import { useState } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import GoogleButton from 'react-google-button';
import Button from '../button-component/button.component';
import { Link } from 'react-router-dom';
import "./Sign-in.scss"
const defaultformdetails = {
  email: '',
  password: '',
};

const Signin = () => {
  const [formDetails, setFormdetails] = useState(defaultformdetails);
  const { email, password } = formDetails;


  const resetFormFields = () => {
    setFormdetails(defaultformdetails);
  }
  const signInwithgoogle = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    await createUserDocumentFromAuth(user);
  };
  const onHandlechange = (event) => {
    const { name, value } = event.target;
    setFormdetails({ ...formDetails, [name]: value });
  };
  // const signupfunction=async()=>{
  //   const userDocRef=await createAuthUserWithEmailAndPassword();

  // };
  const handleSubmit = async (event) => {
    event.preventDefault();


    
    try {
      const response=await SignInAuthUserWithEmailAndPassword(email,password);
      // console.log(response);
      resetFormFields();
      
      
  
      
    } catch (error) {
      console.log(error);
      if(error.code=="auth/wrong-password"){
        alert('wrong-password');
        
      }
      else if(error.code=="auth/user-not-found"){
        alert('user not found');
        
      }
      
      
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} >
        <h1>Already have an Account!</h1>
             
             
                <input  className='input' type='text' name='email'placeholder='enter your email' value={email}  onChange={onHandlechange} />
                <br />
             
             
                <input className='input' type="password" name='password'placeholder='enter your password'  value={password} onChange={onHandlechange} />
                <div className='button-flex'>
                <Button type="submit">Sign-in</Button>
                <h1 className='division'>---------------------or--------------------</h1>
                <GoogleButton className="signinwithgoogle" onClick={signInwithgoogle} />
                <h1 className='division'>Dont have an account </h1>
                
                <Link className='linktosignout' to='/signout'>Signup</Link>
                
                
                </div>


      </form>


    </div>
  )
}

export default Signin
