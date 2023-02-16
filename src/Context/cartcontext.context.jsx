import { createContext,useState,useContext,useEffect } from "react";
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemTocart:()=>{},
    quantity:0,
    
    
    SubtractFromCart:()=>{},
    CartTotal:0
});
const addCartItem=(productToAdd,cartItems)=>{
    //if product is already present in it
    const existingCartItem=cartItems.find((cartitem)=>cartitem.id==productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartitem)=>cartitem.id==productToAdd.id?{...cartitem,quantity:cartitem.quantity+1}:cartitem)

    }
    //return new array when item is first time added to cart
return [...cartItems,{...productToAdd,quantity:1}]
}
//remove item from cart 
const removeItemfromCartHelper=(productToremove,cartItems)=>{
    const filtered= cartItems.filter(cartitem=>cartitem.id!=productToremove.id);
    console.log(filtered);
    return filtered;

}
const SubtractItemfromcartHelper=(productToRemove,cartItems)=>{
    if(productToRemove.quantity==1){
        return cartItems.filter(cartitem=>cartitem.id!=productToRemove.id);
    }

    
    return cartItems.map((cartItem)=>
    cartItem.id==productToRemove.id?
    {...cartItem,quantity:cartItem.quantity-1}
    :cartItem
    );
}
//
export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const[cartItems,setCartItems]=useState([]);
    const [quantity,Setquantity]=useState(0);
    const [CartTotal,setCartTotal]=useState(0);

    const addItemTocart=(productToAdd)=>{
        setCartItems(addCartItem(productToAdd,cartItems));
    };
 
    const RemoveFromCart=(productToRemove)=>{
        setCartItems(removeItemfromCartHelper(productToRemove,cartItems));
    };

    const  SubtractFromCart=(productTosubtract)=>{
        setCartItems(SubtractItemfromcartHelper(productTosubtract,cartItems));
    }
    
    useEffect(() => {
        const newCartTotal=cartItems.reduce(
         (total,cartItem)=>total+cartItem.quantity* cartItem.price,0
        );
        setCartTotal(newCartTotal);
         
         
     }, [cartItems]);
    const value={cartItems,isCartOpen,addItemTocart,setIsCartOpen,RemoveFromCart,SubtractFromCart,CartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
    
}