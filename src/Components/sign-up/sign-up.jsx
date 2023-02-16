import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { signInEmailAndPassword ,SignInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-up.css"
import Button from "../button-component/button.component";
const defaultformdetails = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
};
export default function Signup() {

    const [formDetails, setFormdetails] = useState(defaultformdetails);
    const { email, displayName, password, confirmPassword } = formDetails;
    console.log(formDetails);
    const onHandlechange = (event) => {

        const { name, value } = event.target;
        setFormdetails({ ...formDetails, [name]: value });

    }
    const resetChangeHandler=()=>{
        setFormdetails(defaultformdetails);
    }
    const onSubmithandlechange = async (event) => {
        resetChangeHandler();
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password and confirmedpassword dont match");
            return;
        }
        try {
            const { user } = await signInEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });


        }
        catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert("cannot create user,email already in use");
            }
            else {
                console.log("user creation encountered an error", error);
            }

        }

    }

    return (

        <div className="sign-up-component">

            <form onSubmit={onSubmithandlechange}>
            <h1>Dont have an Account? Create one</h1>
                
                
                <input type='text' name='displayName' placeholder="Username" className="input" value={displayName} onChange={onHandlechange} />
                <br />
             
                <input type='text' name='email' value={email} placeholder='Email' className="input" onChange={onHandlechange} />
                <br />
              
              
                <input type="password" name='password' value={password} placeholder='Password' className="input" onChange={onHandlechange} />
                <br />
               
                <input type="password" name='confirmPassword'  placeholder='confirm-password'  value={confirmPassword} className="input" onChange={onHandlechange} />
                <div className="sign-up-button">
                <Button type="submit"  >Sign-up</Button>
                </div>
            </form>

        </div>

    )
}
