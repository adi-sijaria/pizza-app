import { createContext, useState } from "react";
import PIZZAMENU from '../pizza-data.json';
export const ProductContext = createContext({
    pizzamenu: [],
    setPizzamenu: () => null,
    Filterthroughveg: () => { },
    vegnonvegCart:[],
    setVegnonvegcart:()=>{},
    Searchcart:[],
    SetsearchCart:()=>{},
    Filterthroughsearch:()=>{}
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
    const filtered= vegnonvegCart.filter(pizza=>pizza.name.toLocaleLowerCase().includes(event.target.value));
    // console.log(filtered);
    return filtered;
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
    const value = { pizzamenu, setPizzamenu ,Filterthroughveg,vegnonvegCart,setVegnonvegcart,Filterthroughsearch,Searchcart};
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
