import { createContext,useState,useContext,useEffect,useReducer } from "react";
import { createAction } from "../utils/reducer.utils";
export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemTocart:()=>{},
    quantity:0,
    SubtractFromCart:()=>{},
    cartCount:0,
    CartTotal:0
});
const INITIAL_STATE={
    cartItems:[],
    CartTotal:0,
    cartCount:0,
    isCartOpen:true,
}
const cartReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'SET_CART_ITEMS':
            return{
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN':
            return{
                ...state,
                isCartOpen:payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

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
    // const [isCartOpen,setIsCartOpen]=useState(false);
    // const[cartItems,setCartItems]=useState([]);
    // const [quantity,Setquantity]=useState(0);
    // const [CartTotal,setCartTotal]=useState(0);
    const[{cartItems,isCartOpen,CartTotal,cartCount},dispatch]= useReducer(cartReducer, INITIAL_STATE);

    const addItemTocart=(productToAdd)=>{
        const newCartItems=addCartItem(productToAdd,cartItems);
        updateCartItemsReducer(newCartItems)
    
    };
 
    const RemoveFromCart=(productToRemove)=>{
        const newCartItems=removeItemfromCartHelper(productToRemove,cartItems);
        updateCartItemsReducer(newCartItems)
    };

    const  SubtractFromCart=(productTosubtract)=>{
        const newCartItems=SubtractItemfromcartHelper(productTosubtract,cartItems);
        updateCartItemsReducer(newCartItems);
    }
    const setIsCartOpen=(bool)=>{
        dispatch({type:'SET_IS_CART_OPEN',payload:bool});
    }
    
    // useEffect(() => {
    //     const newCartTotal=cartItems.reduce(
    //      (total,cartItem)=>total+cartItem.quantity* cartItem.price,0
    //     );
    //     setCartTotal(newCartTotal);
         
         
    //  }, [cartItems]);
     const updateCartItemsReducer=(newCartItems)=>{
        const newCartTotal=newCartItems.reduce(
            (total,cartItem)=>total+cartItem.quantity* cartItem.price,0
           );
        const newCartCount=newCartItems.reduce(
            (total,cartitem)=>total+cartitem.quantity,0
        );
        dispatch(
            createAction('SET_CART_ITEMS',{cartItems:newCartItems,CartTotal:newCartTotal,cartCount:newCartCount})
            )
     }
    const value={cartItems,isCartOpen,addItemTocart,setIsCartOpen,RemoveFromCart,SubtractFromCart,CartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
    
}