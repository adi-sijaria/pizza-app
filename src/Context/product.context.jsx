import { createContext, useState } from "react";
import PIZZAMENU from '../pizza-data.json';
import { useEffect } from "react";
export const ProductContext = createContext({
    pizzamenu: [],
    setPizzamenu: () => null,
    Filterthroughveg: () => { },
    vegnonvegCart:[],
    setVegnonvegcart:()=>{},
    Searchcart:[],
    SetsearchCart:()=>{},
    Filterthroughsearch:()=>{},
    Filterthroughprice:()=>{}
});
const Filterthroughveghelper = (event,pizzamenu) => {
    console.log(event.target.value);
    console.log("hello");
    // pizzamenu.map((pizza)=>console.log(pizza.veg))
    if(event.target.value=="true"){
        const veg= pizzamenu.filter(pizza=>pizza.veg==true);
        return veg;
    }
    else if(event.target.value=="false"){
        const nonveg= pizzamenu.filter(pizza=>pizza.veg==false);
        return nonveg;
        
    }
    else{
        return pizzamenu;
    }
}
const Filterthroughsearchhelper=(event,vegnonvegCart)=>{
    console.log("hello");
    console.log(vegnonvegCart);
    const filtered= vegnonvegCart.filter(pizza=>pizza.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    // console.log(filtered);
    return filtered;
}
const Filterthroughpricehelper=(event,Searchcart)=>{
    
    
    // const filtered= vegnonvegCart.filter(pizza=>pizza.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    // console.log(filtered);
    // return filtered;
    if(event.target.value=="increasing"){
        const increament= Searchcart.sort((a,b)=>b.price-a.price)
        console.log("increament")
        console.log(increament)
        return increament;
    }
    else if(event.target.value=="decreasing"){
        const decreament= Searchcart.sort((a,b)=>a.price-b.price)
        return decreament;
        
    }
    else{
        return Searchcart;
    }
}
export const ProductsProvider = ({ children }) => {
    const [pizzamenu, setPizzamenu] = useState(PIZZAMENU);
    const [vegnonvegCart,setVegnonvegcart]=useState(pizzamenu);
    const[Searchcart,SetsearchCart]=useState(vegnonvegCart);
    const  Filterthroughveg = async(event) => {
        // console.log(event.target.value);
        await setVegnonvegcart(Filterthroughveghelper(event,pizzamenu));
    }
    const Filterthroughsearch=async(event)=>{
        await SetsearchCart(Filterthroughsearchhelper(event,vegnonvegCart));
    }

    
    
    const Filterthroughprice=async(event)=>{
        await SetsearchCart(Filterthroughpricehelper(event,Searchcart))
    }
    const value = { pizzamenu, setPizzamenu ,Filterthroughveg,vegnonvegCart,setVegnonvegcart,Filterthroughsearch,Searchcart,Filterthroughprice};
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
