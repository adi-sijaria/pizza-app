import "./product.styles.css";
import Button from "../button-component/button.component";
import { useState,useContext,createContext } from "react";

import { CartContext } from "../../Context/cartcontext.context";

import { ToogleContext } from "../../Context/tooglemode.context";
const Productcard=({pizzamenu})=>{
    const {id,name,img,description,veg,price}=pizzamenu;
    const {addItemTocart,cartItems}=useContext(CartContext);
    const {darkmode,SetDarkMode}=useContext(ToogleContext)
   
    
    const addProductToCart=()=>addItemTocart(pizzamenu);
    console.log(cartItems);
    //3F0071
    return(
        <div className="product-card" style={{backgroundColor:darkmode?"#00337C": "rgb(246, 249, 249)",color:"black"}} id={id}>
          
                
            <img className="image-holder" src={img} alt={`${name}`}/>
                

            
            <div className="details">
                <h1>{name}({price}$)</h1>
                <h3 style={{textAlign:'center'}} >{description.slice(0,50)}</h3>
            </div >
                <div className="button-c">
                    <Button  type="inverted" onClick={addProductToCart}>ADD TO CART</Button>

                </div>
                
        </div>
    )


}
export default Productcard


