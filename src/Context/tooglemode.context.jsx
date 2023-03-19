import { createContext,useState,useContext } from "react";

import { useEffect } from "react";
export const ToogleContext=createContext();
export const ToogleProvider=({children})=>{
    const [darkmode,SetDarkMode]=useState(false);
    useEffect(()=>{
        
        
        
        if(darkmode){
            document.body.style.backgroundColor="rgb(18, 3, 32)"
            //00337C
        }
        else{
            console.log("hello");
            document.body.style.backgroundColor="white"

        }

    },[darkmode])
  
    

   
 
    
    const value={darkmode,SetDarkMode};
  return(
    
        <ToogleContext.Provider value={value}>{children}</ToogleContext.Provider>
  )
        
}
;